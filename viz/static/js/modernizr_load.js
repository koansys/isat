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
  }]);
