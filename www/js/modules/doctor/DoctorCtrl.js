(function() {

	angular
	.module('app.doctor.ctrl', [])
	.controller('DoctorCtrl', DoctorCtrl)

	DoctorCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function DoctorCtrl($scope, ionicMaterialInk) {
		var vm = this;
		DoctorCtrlInit();
		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

		function DoctorCtrlInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}
	}

})();