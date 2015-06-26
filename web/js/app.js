(function () {
	'use strict'
	console.log('hello');

	angular
		.module('app', [])
		.controller('AppController', appController);

	appController.$inject = ['$scope', '$rootScope', 'firstService', 'secondService'];

	function appController($scope, $rootScope, firstService, secondService) {
		$scope.clickMe = clickMe;
		$scope.myText = 'Hello, world!';
		console.log('appController');

		function clickMe() {
			console.log('clicked the button');

			firstService.broadcastStuff();
		
		}

	};
				

})();