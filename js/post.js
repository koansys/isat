var geodetic_t = function() {
    lat = 0.0;
    lon = 0.0;
    alt = 0.0;
    theta = 0.0;
}
               
function Calculate_LatLonAlt(time, pos, geodetic) {
    var r = 0.0, e2 = 0.0, phi = 0.0, c = 0.0;
    var f = 3.35281066474748E-3;
    var xkmper = 6.378137E3;
    var pio2 = 1.57079632679489656;
    var twopi = 2.0 * Math.PI;
    
    geodetic.theta = Math.atan2(pos[1], pos[0]);
    geodetic.lon = FMod2p(geodetic.theta - ThetaG_JD(time));

    r = Math.sqrt(Sqr(pos[0]) + Sqr(pos[1]));
    e2 = f * (2 - f);
    geodetic.lat = Math.atan2(pos[2], r);

    do {
        phi = geodetic.lat;
        c = 1 / Math.sqrt(1 - e2 * Sqr(Math.sin(phi)));
        geodetic.lat = Math.atan2(pos[2] + xkmper * c * e2 * Math.sin(phi), r);

    } while (Math.abs(geodetic.lat - phi) >= 1E-10);

    geodetic.alt = r / Math.cos(geodetic.lat) - xkmper * c;

    if (geodetic.lat > pio2)
        geodetic.lat -= twopi;
}