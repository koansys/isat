function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: ['media/sot/js/index.min.js?v=114004121413', 'media/sot/js/ui.min.js?v=114004121413'],
    nope : 'media/sot/js/index-crippled.min.js?v=114004121413'
  }]);
