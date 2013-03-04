/*global document, window, console, setInterval, Cesium, Image, navigator, twoline2rv, sgp4, tle*/
(function () {
    'use strict';
    var ellipsoid       = Cesium.Ellipsoid.WGS84;
    var clock           = new Cesium.Clock();
    var orbitTraces       = new Cesium.PolylineCollection(); // currently only one at a time
    var satrecs         = [];   // populated from onclick file load
    var satdesigs       = [];   // populated from onclick file load
    var satnames        = [];   // populated from onclick file load
    var satids          = [];   // populated from onclick file load
    var satPositions    = [];   // calculated by updateSatrecsPosVel()
    var WHICHCONST      = 84;   //
    var TYPERUN         = 'm';  // 'm'anual, 'c'atalog, 'v'erification
    var TYPEINPUT       = 'n';  // HACK: 'now'
    var PLAY            = true;
    var SAT_POSITIONS_MAX = 25; // Limit numer of positions displayed to save CPU
    var CALC_INTERVAL_MS  = 1000;

    // TOGGLE Play
    document.getElementById('play_button').onclick = function () {
        PLAY = true;
    };
    document.getElementById('pause_button').onclick = function () {
        PLAY = false;
    };



    function getSatrecsFromTLEFile(fileName) {
        var tles = tle.parseFile(fileName);
        var satnum, max, rets, satrec, startmfe, stopmfe, deltamin;

        // Reset the globals
        satrecs = [];
        satnames = [];
        satdesigs = [];
        satids = [];

        for (satnum = 0, max = tles.length; satnum < max; satnum += 1) {
            satnames[satnum] = tles[satnum][0].trim();        // Name: (ISS (ZARYA))
            satdesigs[satnum] = tles[satnum][1].slice(9, 17); // Intl Designator YYNNNPPP (98067A)
            satids[satnum]   = tles[satnum][2].split(' ')[1]; // NORAD ID (25544)
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
        var satrecsOut = [];
        var positions = [];
        var velocities = [];
        var satnum, max, jdSat, minutesSinceEpoch, rets, satrec, r, v;

        for (satnum = 0, max = satrecs.length; satnum < max; satnum += 1) {
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
        // UPDATE GLOBAL SO OTHERS CAN USE IT (TODO: make this sane w.r.t. globals)
        satPositions = positions;
        return {'satrecs': satrecsOut,
                'positions': positions,
                'velocities': positions};
    }

    function displayPositions(sats) {
        var positionTable = document.getElementById('positions');
        var tbody = positionTable.getElementsByTagName('tbody')[0];
        var satnum, max, pos0, vel0, vel0Carte, carte, carto, newRow;

        if (typeof tbody !== 'undefined' && tbody !== null) {
            positionTable.removeChild(tbody);
        }
        tbody = document.createElement('tbody');
        positionTable.appendChild(tbody);
        for (satnum = 0, max = satrecs.length; satnum < max && satnum < SAT_POSITIONS_MAX; satnum += 1) {
            pos0 = sats.positions[satnum];                 // position of first satellite
            vel0 = sats.velocities[satnum];
            vel0Carte = new Cesium.Cartesian3(vel0[0], vel0[1], vel0[2]);
            carte = new Cesium.Cartesian3(pos0[0], pos0[1], pos0[2]);
            // BUG: carto giving bad valus like -1.06, 0.88, -6351321 or NaN; radians instead of degrees?
            carto = ellipsoid.cartesianToCartographic(carte); // BUG: Values are totally unrealistic, height=NaN
            newRow = tbody.insertRow(-1);
            newRow.insertCell(-1).appendChild(document.createTextNode(satnames[satnum]));
            newRow.insertCell(-1).appendChild(document.createTextNode(satids[satnum]));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.x.toFixed(0)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.y.toFixed(0)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carte.z.toFixed(0)));
            newRow.insertCell(-1).appendChild(document.createTextNode(vel0Carte.magnitude().toFixed(0)));
            newRow.insertCell(-1).appendChild(document.createTextNode(Cesium.Math.toDegrees(carto.latitude).toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(Cesium.Math.toDegrees(carto.longitude).toFixed(3)));
            newRow.insertCell(-1).appendChild(document.createTextNode(carto.height.toFixed(0)));
        }
    }

    function computeStats() {
        var currentTime = clock.tick();
        var now = new Cesium.JulianDate(); // TODO: we'll want to base on tick and time-speedup

        if (PLAY) {
            document.getElementById('date').textContent = currentTime.toDate();
        }
        if (satrecs.length > 0 && PLAY) {
            var sats = updateSatrecsPosVel(satrecs, now); // TODO: sgp4 needs minutesSinceEpoch from timeclock
            satrecs = sats.satrecs;                       // propagate [GLOBAL]
            displayPositions(sats);
        }
    }

    getSatrecsFromTLEFile('tle/SMD.txt');
    document.getElementById('select_satellite_group').onchange = function () {
        orbitTraces.removeAll();
        getSatrecsFromTLEFile('tle/' + this.value + '.txt'); // TODO: security risk?
    };

    setInterval(computeStats, CALC_INTERVAL_MS);

}());
