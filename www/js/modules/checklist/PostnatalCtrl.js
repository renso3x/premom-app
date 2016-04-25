(function() {

	angular
		.module('app.checklist.ctrl')
		.controller('PostnatalCtrl', PostnatalCtrl)

	PostnatalCtrl.$inject = ['$scope'];
	function PostnatalCtrl($scope) {
		var vm = this;
		vm.state = "Postnatal";

		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

	}
})();