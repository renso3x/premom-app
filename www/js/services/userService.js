(function() {

	angular
	.module('app.user.serivce', [])
	.factory('userService', userService)

	function userService() {
		return {
			setUserRole: setUserRole,
			getUserRole: getUserRole,

			setUserID: setUserID,
			setUserProfile: setUserProfile,

			getUserID: getUserID,
			getUserProfile: getUserProfile,

			setCalendar: setCalendar,
			getCalendar: getCalendar
		}

		function setUserRole(role) {
			localStorage.setItem('role', role);
		}

		function getUserRole() {
			return localStorage.getItem('role');
		}

		function setUserID(id) {
			localStorage.setItem('user_id', id);
		}

		function setUserProfile(data) {
			localStorage.setItem('user', data)
		}

		function getUserID() {
			return localStorage.getItem('user_id')
		}

		function getUserProfile() {
			return localStorage.setItem('user')
		}

		function setCalendar(data) {
			return $http.post(api, data).then(handleSuccess, handleError)
		}
		function getCalendar(id) {
			return $http.get(api + id).then(handleSuccess, handleError)
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