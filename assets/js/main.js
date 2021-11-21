// Jquery included
(function ($, Drupal) {
  function app() {
    // Code goes here
    console.log("something");
  }

  app();

  //Ajax context attachment
  Drupal.behaviors.box_theme = {
    attach: function (context, settings) {
      app();
    },
  };
})(jQuery, Drupal);
