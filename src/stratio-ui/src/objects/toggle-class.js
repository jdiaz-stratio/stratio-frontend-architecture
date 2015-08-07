(function() {
	'use strict';

	angular
		.module('myApp')
		.directive('toggleClass', toggleClass);

		function toggleClass() {
		    return {
		        restrict: 'A',
		        link: function(scope, element, attrs) {
		            element.bind('click', function() {
		                element.toggleClass(attrs.toggleClass);
		            });
		        }
		    };
		}
})();
