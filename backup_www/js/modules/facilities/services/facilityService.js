(function() {
	'use strict';

	angular
		.module('app.facilities.factory', [])
		.factory('facilityService', facilityService)

	facilityService.$inject = ['$http'];
	function facilityService() {
		return {
			getHospital: getHospital,
		};

		function getHospital() {
		}

	}

})();