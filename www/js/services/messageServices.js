(function() {

	angular
	.module('app.message.services', [])
	.factory('messageService', messageService)

	messageService.$inject = ['$http']
	function messageService($http) {
		return {
			getMessages: getMessages,
			postMessage: postMessage
		}

		function getMessages() {
			return $http.get(api).then(handleSuccess, handleError)
		}
		function postMessage() {
			return $http.post(api).then(handleSuccess, handleError)
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