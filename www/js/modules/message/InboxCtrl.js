(function() {

	angular
		.module('app.inbox.ctrl', [])
		.controller('InboxCtrl', InboxCtrl)

	InboxCtrl.$inject = ['$scope'];
	function InboxCtrl($scope) {
		var vm = this;

		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}
	}

})();