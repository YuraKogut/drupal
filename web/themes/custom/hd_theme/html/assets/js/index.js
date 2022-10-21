(function ($, Drupal, once) {

  Drupal.behaviors.burgerFilterBehavior = {
    attach: function (context, settings) {
      $('.burger-filter', context).on('click', function() {
        $(this).toggleClass('burger-filter_active');
        $('.region-left-sitebar').toggleClass('region-left-sitebar_active');
      });
    }
  };

})(jQuery, Drupal, once);
