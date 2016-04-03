(function() {
	'use strict';

	angular
		.module('app.doctor.controller', [])
		.controller('DoctorController', DoctorController);

	DoctorController.$inject = ['$scope'];
	function DoctorController($scope) {
		var vm = this;
		$scope.doctors = [
			{
				'id': 1,
				'name': 'Pul Goso'
			},
			{
				'id': 2,
				'name': 'Edward Snart'
			},
			{
				'id': 3,
				'name': 'John Doe'
			},
		];

	}
})()