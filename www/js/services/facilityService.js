(function() {

	angular
	.module('app.facility.service', [])
	.factory('facilityService', facilityService)

	facilityService.$inject = ['$http'];
	function facilityService($http) {
		return {
			getHospital: getHospital,
			getCenters: getCenters,
		}

		function getHospital() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function getCenters() {
			return $http.get(api).then(handleSuccess, handleError);
		}

		/*
		* response
		*/
	 	function handleError(response) {
			return response.data;
        }
        function handleSuccess(response) {
        	return response.data;
        }
	}
})()