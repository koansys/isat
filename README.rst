==============================
 SOT: Satellite Orbit Tracker
==============================

Goal
====

We are developing a replacement for the functionality of JTrack-3D
which uses the SGP4 algorithms to calculate satellite positions and
renders them in 3D using the Cesium engine -- completely in the browser,
implemented as JavaScript.

.. image:: https://raw.github.com/koansys/sot/master/screenshot.png

(Dis)Claimer
============

This is my first attempt at JavaScript.  I also haven't used MATLAB
until now.

As such, my JavaScript code is not following good practices for
structure, modularity, loading, inhertiance, etc, etc.  I'm starting
with bare JavaScript before using jQuery, RequireJS, AMD, etc. I'm
learning, and the Cesium code is really a good exemplar.

Overview
========

I've translated the SGP algorithms from MATLAB which we believe to be
the best current propagator implementation; see Miura's PhD thesis.
It's a direct translation and has some very un-JavaScript structure,
including globals used by the original FORTRAN and MATLAB
implementations.  This needs to be restructured.  I've written tests
to capture MATLAB calculations and translated them to validate the
JavaScript implementation.

We use NORAD Two Line Element (TLE) data which describes the last
known position, velocity, and orbital parameters for each satellite.
These are pulled from Dr. T.S. Kelso's site Celestrak.com which is
canonical for public data and updated frequently.  Currently the TLE
files are stored with the code for development, but we plan to have
the browser download them directly and cache them locally using HTML5
local storage.

AGI's Cesium is an excellent virtual globe and map engine, built on
WebGL, and open sourced on GitHub.  It would not be possible for us to
provide sophisticated visualizations without this software.

We believe client-side JavaScript is the best way to deliver this
content to users without requiring plugings (e.g., Eyes On The Solar
System's requirement for the Unity game engine, or World Wind's Java
download). While not all browsers support WebGL now, most desktops
browsers do and mobile is improving.  Running client-side means we do
not need a farm of servers to stream satellite locations to clients:
the calculations are done in the browsers themselves.

The code here is divided into two areas: SGP4 satellite calculations
and Cesium-based visualizaiton.

Trying it out
-------------

It would be nice if you could clone this code, then open the
viz/index.html file in a browser.  Unfortunately, images and globe
backgrounds won't render due to cross-domain issues "SECURITY_ERR: DOM
Exception 18" on Chrome. Firefox seems to render everything
fine. Safari renders the images but for me is stalled loading the
tiles from Bing (beachball of death).

Instead, put the unpacked files into a place your web server can see
them, then hit the index.html.  On my Mac, I put it under ~/Sites/

Browser support
---------------

I'm developing on OS X.

I primarily use Chrome (22.0.1229.94) to visualize it.

Firefox 16.0 and 17.0 have worked fine for me.

Safari 6.0.1 doesn't have WebGL support unless you enable it:
Preference, Advanced, Show Develop menu in menu bar; Develop menu,
Enable WebGL.

Android CyanogenMod 9 on HP TouchPad:

- The stock browser partially renders some statellites and globe, but then hangs.
- Firefox runs and displays the calculations but shows me a blank screen.
- Dolphin: TBD

Android CyanogenMod 7 on Nook Color:

- Stock browser: TBD
- Firefox: TBD
- Dolphin: TBD

Android CyanogenMod (SuperSonic) 7.2.0 on HTC Evo 3G (2+ years old):

- Stock Browser: Renders UI controls which work, but no globe or positions displayed
- Firefox:       Renders UI controls which work, but no globe or positions displayed
- Dolphin:       Renders UI controls which work, but no globe or positions displayed

