======
 TODO
======

Calcluate multiple satellites at one time

Animate single (or multiple) satellites over time. This will requiring
marching through calculations per Cesium tick, and rotating into
time-specific ECF coords.

======
 Done
======

Rotate satellites from ECI TEME to ECF
======================================

Satellites are calculated in ECI TEME and we need to rotate them onto
ECF (Earth Centered Fixed) based on current time.

I can get the current time::

  var time = new Cesium.JulianDate();

We can then get a rotation matrix to transform from TEME to axes at a given time::

   var transform = Cesium.Transforms.computeTemeToPseudoFixedMatrix(time)

See http://localhost:8080/Build/Documentation/Transforms.html?classFilter=&show=all
on computeTemeToPseudoFixedMatrix() and eastNorthUptoFixedFrame().

If we have satellite X,Y,Z in TEME, we should be able to transform
them to Cartographic (lat, lon, alt) or Cartesian (x,y,z) to render
them appropriately.

Time/Lighting
=============

The lighting of the globe doesn't seem to correspond to actual time,
Central and West US are never illuminated.
