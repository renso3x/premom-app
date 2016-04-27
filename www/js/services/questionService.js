(function() {

	angular
	.module('app.question.service', [])
	.factory('questionService', questionService)

	questionService.$inject = ['$http'];
	function questionService($http) {

		return {
			getQuestions: getQuestions,
			postQuestion: postQuestion,
			postComment: postComment,
		}

		function getQuestions() {
			return $http.get(api).then(handleSuccess, handleError)
		}
		function postQuestion(data) {
			return $http.post(api, data).thene(handleSuccess, handleError)
		}
		function postComment(id, data) {
			return $http.post(api + id, data).then(handleSuccess, handleError)
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