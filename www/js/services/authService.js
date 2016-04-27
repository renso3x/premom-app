(function() {

	angular
	.module('app.auth.service', [])
	.factory('authService', authService)

	authService.$inject = ['$http']
	function authService($http) {

		return {
			login: login,
			register: register
		}

		function login(data) {
			return $http.post(data).then(handleSuccess, handleError);
		}
		function register(data) {
			return $http.post(data).then(handleSuccess, handleError);
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