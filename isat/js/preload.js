jQuery(document).ready(function ($) {
  opsmode = 'i'; /*GLOBAL for intl, 'i'mproved */

  var images = new Array();
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }
  preload(
    '/media/sot/images/Banner.jpg',
    '/media/sot/images/Title.png',
    '/media/sot/images/NASA_logo.png',
    '/media/sot/images/Zoom_out.png',
    '/media/sot/images/Zoom_in.png',
    '/media/sot/images/Refresh_1.png',
    '/media/sot/images/Refresh_2.png',
    '/media/sot/images/Info_1.png',
    '/media/sot/images/Info_2.png',
    '/media/sot/images/Orbit_1.png',
    '/media/sot/images/Orbit_2.png',
    '/media/sot/images/Satellite_1.png',
    '/media/sot/images/Satellite_2.png',
    '/media/sot/images/Expand_1.png',
    '/media/sot/images/Expand_2b.png',
    '/media/sot/images/Pause_1.png',
    '/media/sot/images/Pause_2.png',
    '/media/sot/images/Play_1.png',
    '/media/sot/images/Play_2.png'
  );
});
