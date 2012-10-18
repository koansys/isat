/*global document, Cesium, Image, issPoints, console, navigator, twoline2rv, sgp4, tle*/
(function () {
    "use strict";
    var canvas = document.getElementById('glCanvas');
    var scene = new Cesium.Scene(canvas);
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    var satrecs = [];           // populated from onclick file load
    var WHICHCONST = 84;
    var TYPERUN = 'm';          // 'm'anual, 'c'atalog, 'v'erification)
    var TYPEINPUT = 'n';        // HACK: 'now'
    var NOW = Date();

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(4000000.0, -15000000.0,  10000000.0),
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428),
        target : Cesium.Cartesian3.ZERO
    });

    scene.setAnimation(function () {
        // Insert code to update primitives based on time, camera position, etc
        var currentTime = clock.tick();
        document.getElementById('date').textContent = currentTime.toDate();
        scene.setSunPosition(Cesium.SunPosition.compute().position);

        if (satrecs.length > 0) {
            var now = new Cesium.JulianDate(); // TODO: we'll want to base on tick and time-speedup
            var sats = updateSatrecsPosVel(satrecs, now); // TODO: sgp4 needs minutesSinceEpoch from timeclock
            var pos0 = sats.positions[0];                 // position of first satellite
            var vel0 = sats.velocities[0];
            var vel0Carte = new Cesium.Cartesian3(vel0[0], vel0[1], vel0[2]);
            var carte = new Cesium.Cartesian3(pos0[0], pos0[1], pos0[2]);
            // BUG: carto giving bad valus like -1.06, 0.88, -6351321 or NaN; radians instead of degrees?
            var carto = ellipsoid.cartesianToCartographic(carte); // BUG: Values are totally unrealistic, height=NaN
            satrecs = sats.satrecs;                       // propagate [GLOBAL]
            displaySats(sats.positions);
            // For debugging, show the position of the first satellite
            // BUG: Velocity doesn't agree with isstracker.com's KMH; problem with Units?
            document.getElementById('cartesian').textContent = "XYZ (Km): " + carte.x.toFixed(3) + ", " + carte.y.toFixed(3) + ", " + carte.z.toFixed(3) + " Velocity(BUG)=" + vel0Carte.magnitude();
            // BUG: Latitude is OK, Longitude doesn't agree with ISS Tracker, Height is sometimes NaN
            document.getElementById('cartographic').textContent = "Lat,Lon(BUG),Height(BUG): " + Cesium.Math.toDegrees(carto.latitude).toFixed(3) + ", " + Cesium.Math.toDegrees(carto.longitude).toFixed(3) + ", " + carto.height.toFixed(3);

        }
    });

    ///////////////////////////////////////////////////////////////////////////
    // Tile Providers

    var bing = new Cesium.BingMapsTileProvider({// fails to detect 404 due to no net :-(
        onerror : function () { console.log("ZOMG, a Bing error"); },
        server : 'dev.virtualearth.net',
        mapStyle : Cesium.BingMapsStyle.AERIAL // AERIAL, AERIAL_WITH_LABELS, COLLINS_BART, ORDNANACE_SURVEY, ROAD
        // Some versions of Safari support WebGL, but don't correctly implement
        // cross-origin image loading, so we need to load Bing imagery using a proxy.
        // This Proxyy.ashx doesn't exist, nor does Cesium.DefaultProxy('/proxy/') from docs
        //proxy : Cesium.FeatureDetection.supportsCrossOriginImagery() ? undefined : new Cesium.DefaultProxy('/Proxy.ashx')
    });
    var osm = new Cesium.OpenStreetMapTileProvider({
        url : 'http://tile.openstreetmap.org/'
    });
    var single = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');

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
    // var composite = new Cesium.CompositeTileProvider([
    //     { provider : single, height : 1e6 },
    //     { provider : bing,   height : 0 }
    // ], scene.getCamera(), ellipsoid); // presumably the camera must be placed first


    var cb = new Cesium.CentralBody(ellipsoid);
    // How do we tell if we can't get Bing, and substitute flat map with 'single'?
    cb.dayTileProvider      = bing; // single; // composite;// bing; // osm; // esri;
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
    primitives.setCentralBody(cb);

    function getSatrecsFromTLEFile(fileName) {
        // Read TLEs from file and return list of initialized satrecs.
        // We can then run the SGP4 propagator over it and render as billboards.
        // TODO: also return list of satellite names (from TLE[0]) for display; satrec.satnum has numeric ID
        var tles = tle.parseFile(fileName);
        var satrecs = [];
        var satnum, rets, satrec, startmfe, stopmfe, deltamin, ro, vo;
        for (satnum = 0; satnum < tles.length; satnum++) {
            rets = twoline2rv(WHICHCONST, tles[satnum][1], tles[satnum][2], TYPERUN, TYPEINPUT);
            satrec   = rets.shift();
            startmfe = rets.shift();
            stopmfe  = rets.shift();
            deltamin = rets.shift();
            // Do we need to do an sgp4(satrec, 0.0) to initialize state vector?
            satrecs.push(satrec);
        }
        return satrecs;
    }

    function updateSatrecsPosVel(satrecs, julianDate) {
        // Calculate new Satrecs based on time given as fractional Julian Date
        // (since that's what satrec stores).
        // Return object containing updated list of Satrecs, Rposition, Velocity.
        // We don't have r (position) or v (velocity) in the satrec,
        // so we have to return a those as a list as well; ugly.
        // XXX Should I just add position and velocity to the satrec objects?
        var satrecsOut = [];
        var positions = [];
        var velocities = [];
        var satnum, jdSat, minutesSinceEpoch, rets, satrec, r, v;
        for (satnum = 0; satnum < satrecs.length; satnum++) {
            jdSat = new Cesium.JulianDate.fromTotalDays(satrecs[satnum].jdsatepoch);
            minutesSinceEpoch = jdSat.getMinutesDifference(julianDate);
            rets = sgp4(satrecs[satnum], minutesSinceEpoch);
            satrec = rets.shift();
            r = rets.shift();      // [1802,    3835,    5287] Km, not meters
            v = rets.shift();
            satrecsOut.push(satrec);
            positions.push(r);
            velocities.push(v);
        }
        return {'satrecs': satrecsOut,
                'positions': positions,
                'velocities': positions};
    }

    function displaySats(satPositions) {
        // Render an icon for each satPosition in the list
        // The calculated position is in Km but Cesium wants meters.
        var image = new Image();
        image.src = 'Images/Satellite.png';
        image.onload = function () {
            var billboards = new Cesium.BillboardCollection();
            var textureAtlas = scene.getContext().createTextureAtlas({image: image});
            var now = new Cesium.JulianDate();
            var posnum, pos, rets, satrec, startmfe, stopmfe, deltamin, ro, vo;
            billboards.modelMatrix = Cesium.Matrix4.fromRotationTranslation(Cesium.Transforms.computeTemeToPseudoFixedMatrix(now),
                                                                            Cesium.Cartesian3.ZERO);
            billboards.setTextureAtlas(textureAtlas);
            for (posnum = 0; posnum < satPositions.length; posnum++) {
                pos = satPositions[posnum];
                billboards.add({imageIndex: 0,
                                position:  new Cesium.Cartesian3(pos[0] * 1000, pos[1] * 1000, pos[2] * 1000)}); // Km to meter
            }
            scene.getPrimitives().removeAll(); // TODO: removes our geo location :-(
            scene.getPrimitives().add(billboards);
        };
    }

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

    // Switch map/tile providers
    var tileProvider = bing;
    var tile_bing = document.getElementById('tile_bing');
    var tile_osm = document.getElementById('tile_osm');
    var tile_single = document.getElementById('tile_single');
    tile_bing.onclick = function () {
        cb.dayTileProvider      = bing;//bing; // composite;// bing; // osm; // esri; // single;
    };
    tile_osm.onclick = function () {
        cb.dayTileProvider      = osm;//bing; // composite;// bing; // osm; // esri; // single;
    };
    tile_single.onclick = function () {
        cb.dayTileProvider      = single;//bing; // composite;// bing; // osm; // esri; // single;
    };

    // Transition between views
    var transitioner = new Cesium.SceneTransitioner(scene);
    var view_3d = document.getElementById('view_3d');
    var view_2d = document.getElementById('view_2d');
    view_2d.onclick = function () {
        transitioner.morphTo2D();
    };
    view_3d.onclick = function () {
        transitioner.morphTo3D();
    };

    // Switch which satellites are displayed.
    document.getElementById('satellites_iss').onclick = function () {
        satrecs = getSatrecsFromTLEFile('tle/iss.txt');
    };
    document.getElementById('satellites_stations').onclick = function () {
        satrecs = getSatrecsFromTLEFile('tle/space-stations.txt');
    };
    document.getElementById('satellites_science').onclick = function () {
        satrecs = getSatrecsFromTLEFile('tle/science.txt');
    };
    document.getElementById('satellites_geosynchronous').onclick = function () {
        satrecs = getSatrecsFromTLEFile('tle/geo.txt');
    };

    //Create a Clock object to drive time.
    var clock = new Cesium.Clock();//availability.start, availability.stop);

    (function tick() {
        // var currentTime = clock.tick();
        // document.getElementById('date').textContent = currentTime.toDate();
        //visualizers.update(currentTime);
        //
        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());
}());
