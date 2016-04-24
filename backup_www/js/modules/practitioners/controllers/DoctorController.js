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
				'name': 'Pul Goso',
				'practioner': 'Medical Doctor'
			},
			{
				'id': 3,
				'name': 'Pul Goso',
				'practioner': 'Medical Doctor'
			},
			{
				'id': 3,
				'name': 'Pul Goso',
				'practioner': 'Medical Doctor'
			},
		];

	}
})()