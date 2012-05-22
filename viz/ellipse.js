if (typeof(String.prototype.trim) === 'undefined') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    };
}

// canvas manager should set the size of ellipse and viewable universe,
// so we can scale coords to fit.

// Test verification file gives
// mins-from-epoch, x, y, z, vx, vy, vz
// Testmat claims to give:
// mins-from-epoch, x, y, z, vx, vy, vz; year, mon, day, hour, min, sec

// This SAT5 data doesn't render very ellipsoidally,
// I'm guessing because our interval is too large.
// We need data with much smaller (one hour?) intervals,
// and that means we may need to hack testmat_test.html/js
// to allow us to specify a different type of run than 'v' verify.

var SAT5 =
    "  0.00000000    7022.46529266   -1400.08296755       0.03995155  1.893841015  6.405893759  4.534807250\n" +
    "360.00000000   -7154.03120202   -3783.17682504   -3536.19412294  4.741887409 -4.151817765 -2.093935425 \n" +
    "720.00000000   -7134.59340119    6531.68641334    3260.27186483 -4.113793027 -2.911922039 -2.557327851 \n" +
    "1080.00000000    5568.53901181    4492.06992591    3863.87641983 -4.209106476  5.159719888  2.744852980 \n" +
    "1440.00000000    -938.55923943   -6268.18748831   -4294.02924751  7.536105209 -0.427127707  0.989878080 \n" +
    "1800.00000000   -9680.56121728    2802.47771354     124.10688038 -0.905874102 -4.659467970 -3.227347517 \n" +
    "2160.00000000     190.19796988    7746.96653614    5110.00675412 -6.112325142  1.527008184 -0.139152358 \n" +
    "2520.00000000    5579.55640116   -3995.61396789   -1518.82108966  4.767927483  5.123185301  4.276837355 \n" +
    "2880.00000000   -8650.73082219   -1914.93811525   -3007.03603443  3.067165127 -4.828384068 -2.515322836 \n" +
    "3240.00000000   -5429.79204164    7574.36493792    3747.39305236 -4.999442110 -1.800561422 -2.229392830 \n" +
    "3600.00000000    6759.04583722    2001.58198220    2783.55192533 -2.180993947  6.402085603  3.644723952 \n" +
    "3960.00000000   -3791.44531559   -5712.95617894   -4533.48630714  6.668817493 -2.516382327 -0.082384354 \n" +
    "4320.00000000   -9060.47373569    4658.70952502     813.68673153 -2.232832783 -4.110453490 -3.157345433"; 

var ellipseMgr = function (ctx, cWidth, cHeight, minX, maxX, minY, maxY, results) {
    // TODO closure to make Initizialized funcs to do the scaling
    console.log("ellipseMgr ctx:", ctx);
    
    var scaleX = function (x) {
        return x * (cWidth - 0) / (maxX - minX) + (cWidth - 0) / 2;
    };

    var scaleY = function (y) {
        return y * (cHeight - 0) / (maxY - minY) + (cHeight - 0) / 2;
    };

    var drawResults = function () {
        var resLines = results.split('\n'),
            len = resLines.length,
            vals, x, y, sx, sy, i;
        ctx.beginPath();
        for (i = 0; i < len; i += 1) {
            vals = resLines[i].trim().split(/\s+/);
            x = parseFloat(vals.shift());
            y = parseFloat(vals.shift());
            sx = scaleX(x);
            sy = scaleY(y);
            console.log("drawResults lineTo", x, y, sx, sy);
            if (i === 0) {      // move to first (0th) point instead of drawing
                ctx.moveTo(sx, sy);
            } else {
                ctx.lineTo(sx, sy);
            }
        }
        ctx.stroke();           // paint it black
    };

    drawResults();              // do it; get results from ellipseMgr
};

$(document).ready(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ellipseMgr(ctx, 640, 480, -10000, 10000, -10000, 10000, SAT5);
});
