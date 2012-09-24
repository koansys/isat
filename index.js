/*global document, Cesium, Image, issPoints, console, navigator*/
(function () {
    "use strict";
    var canvas = document.getElementById('glCanvas');
    var scene = new Cesium.Scene(canvas);
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;

    var bing = new Cesium.BingMapsTileProvider({
        server : 'dev.virtualearth.net',
        mapStyle : Cesium.BingMapsStyle.AERIAL,
        // Some versions of Safari support WebGL, but don't correctly implement
        // cross-origin image loading, so we need to load Bing imagery using a proxy.
        proxy : Cesium.FeatureDetection.supportsCrossOriginImagery() ? undefined : new Cesium.DefaultProxy('/Proxy.ashx')
    });

    var cb = new Cesium.CentralBody(ellipsoid);
    // How do we tell if we can't get Bing, and substitute flat map?
    //cb.dayTileProvider      = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');
    cb.dayTileProvider      = bing;
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;

    primitives.setCentralBody(cb);

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(4000000.0, -15000000.0,  10000000.0),
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428),
        target : Cesium.Cartesian3.ZERO
    });

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

    function viewByGeolocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(show_geo);
        }
        else {
            console.log('I can not haz geo :-(');
        }
        function show_geo(position) {
            var target = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(position.coords.longitude, position.coords.latitude));
            var eye    = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(position.coords.longitude, position.coords.latitude, 1e7));
            // console.log('lat=' + position.coords.latitude + ' lon=' + position.coords.longitude);
            // console.log('cartesian=' + target);
            scene.getCamera().lookAt({
                up : new Cesium.Cartesian3(0,0,1),
                eye : eye,
                target : target
            });

        }
    }
    viewByGeolocation();


    (function tick() {
        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());
}());
