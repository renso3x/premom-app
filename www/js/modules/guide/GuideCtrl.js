(function() {

	angular
		.module('app.guide.ctrl', [])
		.controller('GuideCtrl', GuideCtrl)

	GuideCtrl.$inject = ['$scope'];
	function GuideCtrl($scope) {
		var vm = this;
	}

})();