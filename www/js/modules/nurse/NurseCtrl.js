(function() {

	angular
	.module('app.nurse.ctrl', [])
	.controller('NurseCtrl', NurseCtrl)

	NurseCtrl.$inject = ['$scope', 'ionicMaterialInk', '$state'];
	function NurseCtrl($scope, ionicMaterialInk, $state) {
		var vm = this;
		vm.icon = "fa-stethoscope";
		vm.state = 'Nurses';
		vm.image = 'daenerys.jpg';
		vm.name = 'Daenerys Targaryean';

		NurseCtrlInit();
		$scope.repeat = repeat;
		$scope.viewNurseMidwife = viewNurseMidwife;
		$scope.viewHospital = viewHospital;

		function viewHospital(lat, lng) {
			$state.go('app.nurse-midwife-hospital', {lat: lat, lng: lng});
		}

		function viewNurseMidwife(id) {
			$state.go('app.nurse-profile', {id: id});
		}

		function repeat(n) {
			return new Array(n);
		}

		function NurseCtrlInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}
	}

})();