(function() {

	angular
		.module('app.checklist.service', [])
		.factory('checklistServices', checklistServices);

	checklistServices.$inject = ['$http'];
	function checklistServices($http) {
		return {
			getPrenatalList: getPrenatalList,
			getPostnatalList: getPostnatalList,

			postMyPrenatal: postMyPrenatal,
			postMyPostnatal: postMyPostnatal
		}

		function getPrenatalList() {
			return $http.get(api).then(handleSuccess, handleError)
		}
		function getPostnatalList() {
			return $http.get(api).then(handleSuccess, handleError)
		}

		function postMyPrenatal(data) {
			return $http.post(api, data).then(handleSuccess, handleError);
		}
		function postMyPostnatal(data) {
			return $http.post(api, data).then(handleSuccess, handleError);
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

})();