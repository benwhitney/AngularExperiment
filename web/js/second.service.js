(function () {
	'use strict'

	angular
		.module('app')
		.factory('secondService', secondService);

	secondService.$inject = ['$rootScope'];

	

	function secondService($rootScope) {
		var service = {
			count : 0
		};

		$rootScope.$on('wasclicked', function () { console.log('message received') });
		console.log('secondService');
		return service;

		
	}


})();