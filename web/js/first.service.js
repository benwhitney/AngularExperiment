(function () {
	'use strict'

	angular
		.module('app')
		.factory('firstService', firstService);

	firstService.$inject = ['$rootScope'];

	function firstService($rootScope) {
		var service = {
			count: 0,
			broadcastStuff : broadcastStuff
		};

		console.log('firstService');

		return service;

		//////////////////////////////
		// Functions be here

		function broadcastStuff() {
			$rootScope.$broadcast('wasclicked');
		}

	};

})();