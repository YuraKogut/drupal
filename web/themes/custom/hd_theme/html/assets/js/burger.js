(function ($, Drupal, once) {
  Drupal.behaviors.burgerMenuBehavior = {
    attach: function (context, settings) {
      $('.burger-menu', context).on('click', function() {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
      });
    }
  };
})(jQuery, Drupal, once);
