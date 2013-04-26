// Math Utilities to replicate functions used by MATLAB/Octave.

function sign(val) {
    if (val < 0) {
        return -1;
    }
    if (val > 0) {
        return 1;
    }
    return 0;
}

function cross(v1, v2) {
    // Return 3d cross product vector from two 3d vectors.
    // http://knol.google.com/k/dot-product-cross-product-in-3d
    // http://rosettacode.org/wiki/Vector_products
    // Our vectors are represented as lists, for historical compatibility.
    var x1 = v1[0],
        y1 = v1[1],
        z1 = v1[2],
        x2 = v2[0],
        y2 = v2[1],
        z2 = v2[2];
    return [y1 * z2 - y2 * z1, z1 * x2 - z2 * x1, x1 * y2 - x2 * y1];
}

function dot(a, b) {
    // Return a scalar dot product of two multidimensional vectors.
    // http://c2.com/cgi/wiki?DotProductInManyProgrammingLanguages
    var n = 0,
        lim = Math.min(a.length, b.length),
        i;
    for (i = 0; i < lim; i += 1) {
        n += a[i] * b[i];
    }
    return n;
}


/**
* Added functions to support finding geodetic position
*/
function FMod2p(x) {
    var i = 0;
    var ret_val = 0.0;
    var twopi = 2.0 * Math.PI;
    
    ret_val = x;
    i = parseInt(ret_val / twopi);
    ret_val -= i * twopi;

    if (ret_val < 0.0)
        ret_val += twopi;

    return ret_val;
}

function Sqr(arg) {
    return (arg * arg);
}

function Frac(arg) {
    return(arg - Math.floor(arg));
}

function Modulus(arg1, arg2) {
    return arg1 - (parseInt(arg1 / arg2)) * arg2;
}

function Degrees(arg) {
    var deg2rad =  1.745329251994330E-2;
    
    return (arg / deg2rad);
}