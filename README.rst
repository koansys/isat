========
 README
========

This is some sample code to learn how to use Cesium, AGI's awesome
WebGL virtual globe and map engine.

Basically I want to start with a HelloWorld3D type of app, then render
a bunch of satellites in their correct positions. Later I want to
animate orbits.

Try it
======

You should be able to download it, then open the index.html file in a
browser.  But images and globe backgrounds won't render due to
cross-domain issues "SECURITY_ERR: DOM Exception 18" on
Chrome. Firefox seems to render everything fine. Safari renders the
images but for me is stalled loading the tiles from Bing (beachball of
death).

Instead, put the unpacked files into a place your web server can see
it, then hit the index.html.  On my Mac, I put it under ~/Sites/

Grumble, my Safari hangs pulling Bing map tiles even when running from
localhost. :-(

