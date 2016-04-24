(function() {

	angular
		.module('app.hospital.ctrl', [])
		.controller('HospitalCtrl', HospitalCtrl)

	HospitalCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function HospitalCtrl($scope, ionicMaterialInk) {
		var vm = this;
		vm.icon = "fa-h-square";
		vm.state = 'Hospitals';
		vm.facility_name = 'St. Vincent Hospital';

		HospitalCtrlInit();
		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

		function HospitalCtrlInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}
	}
})()