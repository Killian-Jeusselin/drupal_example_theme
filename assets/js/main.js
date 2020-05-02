
// Jquery included
(function ($, Drupal) {
	
	function app(){
		// Code goes here
			console.log('something');
		}
	
		app();
		
		//Ajax context attachment
		Drupal.behaviors.electricblue = {
			attach: function (context, settings) {
				app();
			}
		};
	})(jQuery, Drupal);