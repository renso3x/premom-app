(function() {
	'use strict';

	angular
		.module('app.register.controller', [])
		.controller('RegisterController', RegisterController)

	RegisterController.$inject = ['$scope']
	function RegisterController($scope) {
		var vm = this;
	}
})()