(function() {

	angular
		.module('app.guide.service', [])
		.factory('guideServices', guideServices);

	guideServices.$inject = ['$http'];
	function guideServices($http) {
		return {
			getPregnancyGuide: getPregnancyGuide,
			getBreastFeedingGuide: getBreastFeedingGuide,
			getDeliverGuide: getDeliverGuide,
		}

		function getPregnancyGuide() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function getBreastFeedingGuide() {
			return $http.get(api).then(handleSuccess, handleError);
		}
		function getDeliverGuide() {
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

})();