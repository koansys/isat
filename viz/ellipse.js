/*global console:true, $:true, document:true
  */
(function () {
    "use strict";                   // make JSHint fascist

    if (typeof(String.prototype.trim) === 'undefined') {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
        };
    }

    // canvas manager should set the HTML's size of ellipse and
    // viewable universe, so we can scale coords to fit.

    // Test verification file gives
    // mins-from-epoch, x, y, z, vx, vy, vz
    // Testmat claims to give:
    // mins-from-epoch, x, y, z, vx, vy, vz; year, mon, day, hour, min, sec

    // Our satcalc data doesn't render very ellipsoidally,
    // I'm guessing because our interval is too large.
    // We need data with much smaller (one hour?) intervals,
    // and that means we may need to hack testmat_test.html/js
    // to allow us to specify a different type of run than 'v' verify.

    var ellipseMgr = function (ctx, cWidth, cHeight, minX, maxX, minY, maxY, results) {
        // TODO closure to make Initizialized funcs to do the scaling
        console.log("ellipseMgr ctx:", ctx, " results:", results);

        var scaleX = function (x) {
            return x * (cWidth - 0) / (maxX - minX) + (cWidth - 0) / 2;
        };

        var scaleY = function (y) {
            return y * (cHeight - 0) / (maxY - minY) + (cHeight - 0) / 2;
        };

        var normalize = function (n) {
            // return 0...1 for an X, Y, Z scaled by min/max
            // can be used to do depth shading.
            // TODO: we need to unify maxX, maxY
            return (n + maxX) / (maxX - minX);
        };

        var colorScale = function (n) {
            // return "#000" ... "#fff" based on n scaled to min/max
            var nScaled, color, colorString,
            colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            nScaled = normalize(n);
            color = colors[Math.floor(nScaled * 16)];
            colorString = "#" + color + color + color;
            return colorString;
        }

        var drawResults = function () {
            // Plot x,z (looking at side of Earth) instead of x,y (looking down north pole)
            var resLines = results.split('\n'),
            len = resLines.length,
            vals, mfe, x, y, z, sx, sy, sz, i, color;
            ctx.strokeStyle = 'black'; // should never be used, see colorScale use below
            ctx.beginPath();
            for (i = 0; i < len; i += 1) {
                vals = resLines[i].trim().split(/\s+/);
                if (vals.length < 3) {
                    console.warn("ignoring short line: ", resLines[i]);
                    continue;
                }
                mfe = parseFloat(vals.shift()); // minutes from epoch
                x = parseFloat(vals.shift());
                y = parseFloat(vals.shift());
                z = parseFloat(vals.shift());
                sx = scaleX(x);
                sy = scaleY(y);
                sz = scaleX(z); // NOTE: BOGUS SCALING HERE, we really only need one scale.

                color = colorScale(y); // map 'sy' to 0...F then set strokestyle to be #000 ... #FFF
                //ctx.strokeStyle = color; // TODO: this isn't working, entire stroke is same color.
                console.log("colorScale y=" + y + " color=" + color);
                //console.log("drawResults lineTo", x, y, sx, sy);
                if (i === 0) {      // move to first (0th) point instead of drawing
                    //ctx.moveTo(sx, sy);
                    ctx.moveTo(sx, sz);
                } else {
                    //ctx.lineTo(sx, sy);
                    ctx.lineTo(sx, sz);
                }
            }
            ctx.stroke();           // paint it black
        };

        var drawEarth = function () {
            // Instead of drawing a circle, I'm sure there's a call.
            // But we're not guaranteed to have identical scaleX and scaleY
            // if the canvas isn't square.
            // TODO: have a single scale for canvas.
            var deg, rad, rx, ry,
                pi2 = Math.PI * 2.0,
                r = 6371.0;          // Earth mean radius in Km
            ctx.strokeStyle = 'blue';
            ctx.beginPath();
            for (deg = 0; deg <= 360; deg += 2) {
                rad = pi2 * (deg / 360.0);
                rx = scaleX(r * Math.cos(rad));
                ry = scaleY(r * Math.sin(rad));
                //console.log("drawEarth deg=" + deg + " rad=" + rad + " rx=" + rx + " ry=" + ry);
                if (deg === 0) {
                    ctx.moveTo(rx, ry);
                } else {
                    ctx.lineTo(rx, ry);
                }
            }
            ctx.stroke();       // paint it (we want blue)
        };

        var drawCoords = function () {
            // Show our X,Y (er, X,Z) coord sizes
            ctx.font = "12px sans-serif";
            ctx.fillText("+",          scaleX(     0), scaleY(0));

            ctx.fillText("X=-10000km", scaleX(-10000), scaleY(0));
            ctx.fillText("X=-5000km",  scaleX( -5000), scaleY(0));
            ctx.fillText("X=-5000km",  scaleX( +5000), scaleY(0));
            ctx.fillText("X=+10000km", scaleX(+10000), scaleY(0));

            ctx.fillText("Z=-10000km", scaleX(0), scaleY(-10000));
            ctx.fillText("Z=-5000km",  scaleX(0), scaleY( -5000));
            ctx.fillText("Z=+5000km",  scaleX(0), scaleY( +5000));
            ctx.fillText("Z=+10000km", scaleY(0), scaleY(+10000));
        }

        console.log("test normalize(5000)=" + normalize(5000));
        console.log("test colorScale(5000)=" + colorScale(5000));

        drawCoords();
        drawEarth();
        drawResults();              // do it; get results from ellipseMgr
    };

    $(document).ready(function () {
        var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        satcalcs = document.getElementById('satcalcs').value;
        console.log("doc ready satcals value=", satcalcs);
        ellipseMgr(ctx, 400, 400, -10000, 10000, -10000, 10000, satcalcs);
    });
}());
