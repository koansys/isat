/* global console: true, $: true, document: true,
 */

// Draw static earth and some coordinate axes.
// Animate a dot or circle rotating it.

(function () {
    "use strict";               // make JSHint fascist

    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    pi2 = Math.PI + Math.PI,
    x0 = canvas.width / 2,
    y0 = canvas.height / 2;

    var drawEarth = function () {
        var radius = 0.75 * canvas.width / 2; // TODO: earth radius Km

        //ctx.globalCompositeOperation = 'destinatin-over';
        ctx.fillStyle = "#888888";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.beginPath();
        // x,y, radius, startAng, endAng, antiClockwise
        ctx.arc(x0,y0, radius, 0, pi2, false);
        ctx.fillStyle = "#000066";
        ctx.strokeStyle = "#0000ff";
        ctx.lineWidth = 10;
        console.log("about to stroke");
        ctx.stroke();
        ctx.fill();
    }

    var drawOrbit = function () {
        var deg,
        rad,
        x,
        y,
        radius = 0.9 * canvas.width / 2;

        for (deg = 0; deg <= 180; deg += 10) {
            rad = pi2 * deg / 360;
            console.log("deg=", deg, "rad=", rad);
            x = x0 + radius * Math.cos(deg);
            y = y0 + radius * Math.sin(deg);
            ctx.save();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "yellow";
            ctx.beginPath();
            // ctx.moveTo(x, y);
            // ctx.arc(x, y, 10, 0, pi2, false);
            ctx.translate(x, y);
            ctx.arc(0, 0, 5, 0, pi2, false);
            ctx.stroke();
            ctx.restore();
        }
    }
    drawEarth();
    drawOrbit();
}())

