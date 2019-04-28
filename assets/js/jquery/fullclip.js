(function($) {
  // defaults
  $.fn.fullClip = function(options) {
    var settings = $.extend({
      current: 0,
      images: [],
      transitionTime: 2000,
      wait: 7000,
      static: false
    }, options);

    // preload images
    var i, end;
    for (i = 0, end = settings.images.length; i < end; ++i) {
        new Image().src = settings.images[i];
    }

    // sort out the transitions + specify vendor prefixes
    $('.fullBackground')
      .css('background-image', 'url(' + settings.images[settings.current] + ')')
      .css('-webkit-transition', 'background ' + settings.transitionTime + 's ease-in-out')
      .css('-moz-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('-ms-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('-o-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('transition', 'background ' + settings.transitionTime + 'ms ease-in-out')


    // change the background image
    (function update() {
        $('.fullBackground').css('background-image', 'url(' + settings.images[settings.current] + ')');
        setTimeout(update, settings.wait);
    }());
}}(jQuery));
