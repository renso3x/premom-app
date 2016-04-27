(function() {

	angular
	.module('app.nurse.service', [])
	.factory('nurseService', nurseService)

	nurseService.$inject = ['$http'];
	function nurseService($http) {
		return {
			getNurses: getNurses,
			viewNurseProfile: viewNurseProfile,
			messageNurse: messageNurse,

			getMidwives: getMidwives,
			viewMidwife: viewMidwife,
		}

		function getNurses() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function viewNurseProfile(id) {
			return $http.get(api + '/' +id).then(handleSuccess, handleError);
		}
		function messageNurse(id, user_id, msg) {
			return $http.post(api).then(handleSuccess, handleError);
		}

		function getMidwives() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function viewMidwife(id) {
			return $http.get(api + '/' +id).then(handleSuccess, handleError);
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