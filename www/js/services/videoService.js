(function() {

	angular
	.module('app.video.service', [])
	.factory('videoService', videoService)

	videoService.$inject = ['$http'];
	function videoService($http) {
		return {
			getVideos: getVideos
		}

		function getVideos() {
			return $http.get(api).then(handleSuccess, handleError)
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