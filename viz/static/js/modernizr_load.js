function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: '/media/sot/js/index.min.js',
    nope : '/media/sot/js/redirects/no_webgl.js'
  }]);
