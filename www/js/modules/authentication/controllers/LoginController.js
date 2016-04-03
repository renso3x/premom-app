(function() {
	'use strict';

	angular
		.module('app.login.controller', [])
		.controller('LoginController', LoginController)

	LoginController.$inject = ['$scope', '$state']
	function LoginController($scope, $state) {
		var vm = this;

		$scope.login = function() {
			$state.go('app.doctor');
		}
	}
})()