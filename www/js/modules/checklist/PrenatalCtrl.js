(function() {

	angular
		.module('app.checklist.ctrl', [])
		.controller('PrenatalCtrl', PrenatalCtrl)

	PrenatalCtrl.$inject = ['$scope'];
	function PrenatalCtrl($scope) {
		var vm = this;
		vm.state = "Prenatal";

		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

	}
})();