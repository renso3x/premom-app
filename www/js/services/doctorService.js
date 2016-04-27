(function() {

	angular
	.module('app.doctor.service', [])
	.factory('doctorService', doctorService)

	doctorService.$inject = ['$http'];
	function doctorService($http) {
		return {
			getDoctors: getDoctors,
			viewDoctorProfile: viewDoctorProfile,
			messageDoctor: messageDoctor,
		}

		function getDoctors() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function viewDoctorProfile(id) {
			return $http.get(api + '/' +id).then(handleSuccess, handleError);
		}
		function messageDoctor(id, user_id, msg) {
			return $http.post(api).then(handleSuccess, handleError);
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