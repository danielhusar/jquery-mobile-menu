/**
 * author: Daniel Husar
 */

(function (window, document, $, undefined) {
  'use strict';


  $.fn.extend({
    mobileMenu: function (options) {

      var defaults = {
        openClass : 'menu-open'
      };
      var settings = $.extend( defaults, options);

      var scrollPosition = 0;
      return this.on('click.menu', function (e) {
        e.preventDefault();

        var $document = $('html');
        var $body = $(document.body);

        if (scrollPosition) {
          $document.toggleClass(settings.openClass); //hide menu first
          $body.scrollTop(scrollPosition);
          scrollPosition = 0;
        } else {
          var tempPosition = $body.scrollTop();
          $body.scrollTop(scrollPosition);
          scrollPosition = tempPosition;
          $document.toggleClass(settings.openClass); //show menu when all caculations are done
        }

      });

    }
  });

}(this, this.document, this.jQuery));
