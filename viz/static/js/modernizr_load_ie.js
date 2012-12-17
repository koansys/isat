Modernizr.load([
  {
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js',
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('js/libs/jquery-1.8.3.min.js');
      }
    }
  },
  {
    load: ['index.js', 'static/js/jquery.simplemodal.js', 'static/js/main.js']
  }
]);