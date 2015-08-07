(function() {
	'use strict';

	angular
		.module('myApp')
		.directive('stratioUiPanel', stratioUiPanel);

		function stratioUiPanel() {
			return {
				restrict: 'E',
				template: '<div class="panel media"><img class="img" src="assets/img/me.jpg" alt="me" />Hola<div class="panel__element" toggle-class="panel__element--highlighted">Mundo</div></div>',
				//templateUrl: 'panel.html'.
				replace: true
			}
		}
})();