function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: 'index.js',
    nope : 'static/js/redirects/no_webgl.js'
  },{
    load: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js', 'static/js/jquery.simplemodal.js', 'static/js/main.js'],
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('js/libs/jquery-1.8.3.min.js');
      }
    }
  }]);
