(function() {

	angular
		.module('app.profile.ctrl', [])
		.controller('ProfileCtrl', ProfileCtrl)

	ProfileCtrl.$inject = ['$scope'];
	function ProfileCtrl($scope) {
		var vm = this;
	}

})();