function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: '/media/sot/js/index.js?v=11122013120737',
    nope : '/media/sot/js/index-crippled.js?v=11122013120737'
  }]);
