/*global document, Cesium, Image, issPoints, console, navigator, twoline2rv, sgp4, tle*/
(function () {
    "use strict";
    var canvas = document.getElementById('glCanvas');
    var scene = new Cesium.Scene(canvas);
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    var cb = new Cesium.CentralBody(ellipsoid);
    var clock = new Cesium.Clock();
    var satrecs = [];           // populated from onclick file load
    var satnames = [];          // populated from onclick file load
    var satids = [];            // populated from onclick file load
    var WHICHCONST = 84;
    var TYPERUN = 'm';          // 'm'anual, 'c'atalog, 'v'erification)
    var TYPEINPUT = 'n';        // HACK: 'now'
    var NOW = Date();
    var SAT_POSITIONS_MAX = 10; // Limit numer of positions displayed to save CPU

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(4000000.0, -15000000.0,  10000000.0),
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428),
        target : Cesium.Cartesian3.ZERO
    });

    ///////////////////////////////////////////////////////////////////////////
    // Tile Providers

    var bing = new Cesium.BingMapsTileProvider({// fails to detect 404 due to no net :-(
        server : 'dev.virtualearth.net'         // default:  mapStyle:Cesium.BingMapStyle.AERIAL
    });
    var osm = new Cesium.OpenStreetMapTileProvider({
        url : 'http://tile.openstreetmap.org/'
    });
    var single = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');

    // How do we tell if we can't get Bing, and substitute flat map with 'single'?
    cb.dayTileProvider      = bing; // single; // composite;// bing; // osm; // esri;
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
    primitives.setCentralBody(cb);

    ///////////////////////////////////////////////////////////////////////////
    // Satellite records and calculation

    function getSatrecsFromTLEFile(fileName) {
        // Read TLEs from file and set GLOBAL satrecs, satnames, satids.
        // We can then run the SGP4 propagator over it and render as billboards.
        var tles = tle.parseFile(fileName);
        var satnum, rets, satrec, startmfe, stopmfe, deltamin, ro, vo;
        satrecs = [];
        satnames = [];
        satids = [];
        for (satnum = 0; satnum < tles.length; satnum++) {
            satnames[satnum] = tles[satnum][0].trim();
            satids[satnum]   = tles[satnum][2].split(' ')[1];
            rets = twoline2rv(WHICHCONST, tles[satnum][1], tles[satnum][2], TYPERUN, TYPEINPUT);
            satrec   = rets.shift();
            startmfe = rets.shift();
            stopmfe  = rets.shift();
            deltamin = rets.shift();
            satrecs.push(satrec); // Don't need to sgp4(satrec, 0.0) to initialize state vector
        }
        // Returns nothing, sets globals: satrecs, satnames, satids
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

    function displayPositions(sats) {
        // Display positions, velocities of current satellites
        // Limit number displayed else browser becomes unusable.
        // BUG: Velocity doesn't agree with isstracker.com's KMH; problem with Units?
        // BUG: Latitude is OK, Longitude doesn't agree with ISS Tracker, Height is sometimes NaN
        var position_table = document.getElementById('positions');
        var tbody = position_table.getElementsByTagName('tbody')[0];
        var satnum, pos0, vel0, vel0Carte, carte, carto, newRow;
        
        if (typeof tbody !== 'undefined' && tbody !== null) {
            position_table.removeChild(tbody);
        }
        tbody = document.createElement('tbody');
        position_table.appendChild(tbody);
        for (satnum = 0; satnum < satrecs.length && satnum < SAT_POSITIONS_MAX; satnum++) {
            pos0 = sats.positions[satnum];                 // position of first satellite
            vel0 = sats.velocities[satnum];
            vel0Carte = new Cesium.Cartesian3(vel0[0], vel0[1], vel0[2]);
            carte = new Cesium.Cartesian3(pos0[0], pos0[1], pos0[2]);
            // BUG: carto giving bad valus like -1.06, 0.88, -6351321 or NaN; radians instead of degrees?
            carto = ellipsoid.cartesianToCartographic(carte); // BUG: Values are totally unrealistic, height=NaN
            newRow = tbody.insertRow(-1);
            newRow.insertCell(-1).appendChild(document.createTextNode(satnames[satnum]));
            newRow.insertCell(-1).appendChild(document.createTextNode(satids[satnum]));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.x.toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.y.toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.z.toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(vel0Carte.magnitude().toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(Cesium.Math.toDegrees(carto.latitude ).toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(Cesium.Math.toDegrees(carto.longitude).toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carto.height.toFixed(3)));
        }
    }

    function populateSatelliteSelector() {
        // Load the satellite names and keys into the selector, sorted by name
        var sat_select = document.getElementById('select_satellite_details');
        var option;
        var satnum;
        var name_idx = {};
        var satkeys;
        for (satnum = 0; satnum < satrecs.length; satnum++) {
            name_idx[satnames[satnum]] = satnum;
        }
        satkeys = Object.keys(name_idx);
        satkeys.sort();
        sat_select.innerHTML = ''; // $('select_satellite_details').empty();
        for (satnum = 0; satnum < satkeys.length; satnum++) {
            option = document.createElement('option');
            option.textContent = satkeys[satnum];
            option.value = name_idx[satkeys[satnum]];
            sat_select.appendChild(option);
        }
    }


    ///////////////////////////////////////////////////////////////////////////
    // Geo

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

    ///////////////////////////////////////////////////////////////////////////
    // Utilities
    
    function xyzKmFixed(pt, fix) {
        // Return string formatted for xyz scaled to Km, with fixed precision.
        return '(' +
            (pt.x / 1000.0).toFixed(fix) + ', ' +
            (pt.y / 1000.0).toFixed(fix) + ', ' +
            (pt.z / 1000.0).toFixed(fix) + ', ' +
            ')';
    }
    
    ///////////////////////////////////////////////////////////////////////////
    // Handle UI events

    function satelliteHoverDisplay(scene, ellipsoid) {
        // When you hover over a satellite, show its name in a popup
        var handler = new Cesium.EventHandler(scene.getCanvas());
        handler.setMouseAction( // actionFunction, mouseEventType, eventModifierKey
            function (movement) {
                var pickedObject = scene.pick(movement.endPosition);
                var sat_div = document.getElementById('satellite_popup');
                var name;
                var cart;
                if (pickedObject) { // is the entire Billboard, not just a single satellite in it
                    // TODO: accessing _index directly feels wrong
                    name = satnames[pickedObject._index];
                    sat_div.textContent = name;
                    sat_div.style.left = movement.endPosition.x + 'px';
                    sat_div.style.top  = movement.endPosition.y + 'px'; // seems a bit high from mouse
                    sat_div.style.display = ''; // remove any 'none'
                    // The following used to work in <style> section, but stopped; why?
                    sat_div.style.position = 'absolute'; // vital to positioning near cursor
                    sat_div.style.padding = '4px';
                    sat_div.style.backgroundColor = '#909090';
                    sat_div.style.color = 'black';
                }
                else {
                    sat_div.style.display = 'none';
                }
            },
            Cesium.MouseEventType.MOVE // MOVE, WHEEL, {LEFT|MIDDLE|RIGHT}_{CLICK|DOUBLE_CLICK|DOWN|UP}
        );
    }
    satelliteHoverDisplay(scene, ellipsoid);

    // Switch map/tile providers
    document.getElementById('select_tile_provider').onchange = function (event) {
        var providers = {'bing' : bing,
                         'osm'  : osm,
                         'static' : single};
        if (providers[this.value]) {
            cb.dayTileProvider = providers[this.value];
        }
    };
    
    // Transition between views
    var transitioner = new Cesium.SceneTransitioner(scene);
    document.getElementById('select_view').onchange = function (event) {
        if (this.value === '2D') {
            transitioner.morphTo2D();
        }
        else {
            transitioner.morphTo3D();
        }
    };

    // Switch which satellites are displayed.
    document.getElementById('select_satellite_group').onchange = function (event) {
        getSatrecsFromTLEFile('tle/' + this.value + '.txt'); // TODO: security risk?
        populateSatelliteSelector();
    };
    getSatrecsFromTLEFile('tle/' + document.getElementById('select_satellite_group').value + '.txt');
    populateSatelliteSelector();


    /////////////////////////////////////////////////////////////////////////////
    // Run the timeclock, drive the animations

    scene.setAnimation(function () {
        // Insert code to update primitives based on time, camera position, etc
        var currentTime = clock.tick();

        document.getElementById('date').textContent = currentTime.toDate();
        scene.setSunPosition(Cesium.SunPosition.compute().position);

        if (satrecs.length > 0) {
            var now = new Cesium.JulianDate(); // TODO: we'll want to base on tick and time-speedup
            var sats = updateSatrecsPosVel(satrecs, now); // TODO: sgp4 needs minutesSinceEpoch from timeclock
            var satnum;
            satrecs = sats.satrecs;                       // propagate [GLOBAL]
            displaySats(sats.positions);
            displayPositions(sats);
        }
    });

    (function tick() {
        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());
}());
