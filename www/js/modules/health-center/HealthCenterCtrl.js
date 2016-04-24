(function() {

	angular
		.module('app.healthcenter.ctrl', [])
		.controller('HealthCenterCtrl', HealthCenterCtrl)

	HealthCenterCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function HealthCenterCtrl($scope, ionicMaterialInk) {
		var vm = this;
		vm.icon = "fa-medkit";
		vm.state = 'Health Centers';
		vm.facility_name = 'Community Health Center';

		HealthCenterCtrlInit();
		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

		function HealthCenterCtrlInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}
	}
})()