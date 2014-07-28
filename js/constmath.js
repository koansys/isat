// ------------------------------------------------------------------------------
//
//                           function constmath
//
//  this function sets constants for mathematical operations. 
//
//  author        : david vallado                  719-573-2600    2 apr 2007
//
//  revisions
//
//  inputs        : description                    range / units
//    none
//
//  outputs       :
//    rad, twopi, halfpi;
//    ft2m, mile2m, nm2m, mile2ft, mileph2kmph, nmph2kmph;
//
//  locals        :
//                -
//
//  coupling      :
//    none.
//
// constmath;
// ------------------------------------------------------------------------------

var small       = 0.00000001,

    infinite    = 999999.9,
    UNDEFINED   = 999999.1,       // lowercase is JavaScript reserved word

    // -------------------------  mathematical  --------------------
    rad         = 180.0 / Math.PI,
    twopi       = 2.0 * Math.PI,
    halfpi      = Math.PI * 0.5,

    // -------------------------  conversions  ---------------------
    ft2m        =    0.3048,
    mile2m      = 1609.344,
    nm2m        = 1852,
    mile2ft     = 5280,
    mileph2kmph = 0.44704,
    nmph2kmph   = 0.5144444;

