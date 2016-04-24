(function() {
	'use strict';

	angular
		.module('app.nurse.controller', [])
		.controller('NurseController', NurseController);

	NurseController.$inject = ['$scope'];
	function NurseController($scope) {
		var vm = this;
	}
})()