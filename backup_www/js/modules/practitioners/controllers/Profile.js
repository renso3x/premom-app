(function() {
	'use strict';

	angular
		.module('app.practitioner.profile.controller', [])
		.controller('ProfileController', ProfileController);

	ProfileController.$inject = ['$scope', '$stateParams'];
	function ProfileController($scope, $stateParams) {
		console.log('im here');
	}
})()