/*global document, Cesium, Image, issPoints, console, navigator, twoline2rv, sgp4*/
(function () {
    "use strict";
    var canvas = document.getElementById('glCanvas');
    var scene = new Cesium.Scene(canvas);
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    var ISS_TLE1 = '1 25544U 98067A   12269.29713419  .00016664  00000-0  29605-3 0  3617';
    var ISS_TLE2 = '2 25544  51.6491 343.7959 0018385  98.9248 345.5460 15.50147629793571';
    var WHICHCONST = 84;
    var TYPERUN = 'm';          // 'm'anual, 'c'atalog, 'v'erification)
    var TYPEINPUT = 'n';        // HACK: 'now'
    var NOW = Date();

    // Call the SGP4 calculation
    // It expects to loop, but we only want location 'now'
    var rets = twoline2rv(WHICHCONST, ISS_TLE1, ISS_TLE2, TYPERUN, TYPEINPUT);
    var satrec = rets.shift();
    var startmfe = rets.shift();
    var stopmfe = rets.shift();
    var deltamin = rets.shift();
    rets = sgp4(satrec, 0.0);   // call propagator to get initial state vector value
    satrec = rets.shift();
    var ro = rets.shift();      // [1802,    3835,    5287] Km, not meters?
    var vo = rets.shift();
    // IssPoints like:           3639156, 2164367, 5288125  meters

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(4000000.0, -15000000.0,  10000000.0),
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428),
        target : Cesium.Cartesian3.ZERO
    });

    // Fix the shading by setting the sun position.
    scene.setAnimation(function () {
        scene.setSunPosition(Cesium.SunPosition.compute().position);
    });

    // Tile Providers

    var bing = new Cesium.BingMapsTileProvider({
        server : 'dev.virtualearth.net',
        mapStyle : Cesium.BingMapsStyle.AERIAL//,
        // Some versions of Safari support WebGL, but don't correctly implement
        // cross-origin image loading, so we need to load Bing imagery using a proxy.
        // This Proxyy.ashx doesn't exist, nor does Cesium.DefaultProxy('/proxy/') from docs
        //proxy : Cesium.FeatureDetection.supportsCrossOriginImagery() ? undefined : new Cesium.DefaultProxy('/Proxy.ashx')
    });
    var osm = new Cesium.OpenStreetMapTileProvider({
        url : 'http://tile.openstreetmap.org/'
    });
    // We get tiles but they're not rendering, why?
    // Chrome: Cross-origin image load denied by Cross-Origin Resource Sharing policy.
    // Chrome: Resource interpreted as Image but transferred with MIME type image/jpg:
    //         "http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/0/0/0".
    // var esri = new Cesium.ArcGISTileProvider({
    //     host : 'server.arcgisonline.com',
    //     service : 'World_Street_Map'
    // });
    // CompositeTileProvider can use different tiles based on camera altitude
    // Can't make this work yet. :-(
    var single = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');
    var composite = new Cesium.CompositeTileProvider([
        { provider : single, height : 1e6 },
        { provider : bing,   height : 0 }
    ], scene.getCamera(), ellipsoid); // presumably the camera must be placed first

    var cb = new Cesium.CentralBody(ellipsoid);
    // How do we tell if we can't get Bing, and substitute flat map with 'single'?
    cb.dayTileProvider      = bing; // composite;// bing; // osm; // esri;
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
    primitives.setCentralBody(cb);

    function addIssPointsInReferenceframe(scene, ellipsoid) {
        var theIssPoints = issPoints();
        var image = new Image();
        image.src = 'Images/Satellite.png';
        image.onload = function () {
            var billboards = new Cesium.BillboardCollection();
            var textureAtlas = scene.getContext().createTextureAtlas({image: image});
            var ip;
            // We can't really use the same JulianDate for all time ticks of a single statellite --
            // time varies with position. But we can with single-tick locations of all satellites.
            var now = new Cesium.JulianDate(); 
            billboards.modelMatrix = Cesium.Matrix4.fromRotationTranslation(Cesium.Transforms.computeTemeToPseudoFixedMatrix(now),
                                                                            Cesium.Cartesian3.ZERO);
            billboards.setTextureAtlas(textureAtlas);
            for (ip = 0; ip < theIssPoints.length; ip++) {
                billboards.add({imageIndex: 0,
                                position: new Cesium.Cartesian3(theIssPoints[ip].x, theIssPoints[ip].y, theIssPoints[ip].z)});
            }
            scene.getPrimitives().add(billboards);
        };
    }
    addIssPointsInReferenceframe(scene, ellipsoid);

    function viewByGeolocation(scene) {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(show_geo);
        }
        else {
            //console.log('I can not haz geo :-(');
        }
        function show_geo(position) {
            var target = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(position.coords.longitude, position.coords.latitude));
            var eye    = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(position.coords.longitude, position.coords.latitude, 1e7));
            // console.log('lat=' + position.coords.latitude + ' lon=' + position.coords.longitude);
            // console.log('cartesian=' + target);
            // Put a cross where we are
            var image = new Image();
            image.src = 'Images/cross_yellow_16.png';
            image.onload = function () {
                var billboards = new Cesium.BillboardCollection(); // how to make single?
                var textureAtlas = scene.getContext().createTextureAtlas({image: image});
                billboards.setTextureAtlas(textureAtlas);
                billboards.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(target);
                billboards.add({imageIndex: 0,
                                position: new Cesium.Cartesian3(0.0, 0.0, 0.0)}); 
                scene.getPrimitives().add(billboards);
            };
            // Point the camera at us and position it directly above us
            scene.getCamera().lookAt({
                up : new Cesium.Cartesian3(0,0,1),
                eye : eye,
                target : target
            });

        }
    }
    viewByGeolocation(scene);


    (function tick() {
        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());
}());
