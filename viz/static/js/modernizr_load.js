function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: '/media/sot/js/index.js',
    nope : '/media/sot/js/redirects/no_webgl.js'
  },{
    load: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js'],
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('/media/sot/js/libs/jquery-1.8.3.min.js');
      }
    }
  }]);
