Modernizr.load([
  {
    load: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js', 'index.js'],
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('/media/sot/js/libs/jquery-1.8.3.min.js');
      }
    }
  }]);