(function() {

	angular
	.module('app.midwife.ctrl', [])
	.controller('MidwifeCtrl', MidwifeCtrl)

	MidwifeCtrl.$inject = ['$scope', 'ionicMaterialInk', '$state'];
	function MidwifeCtrl($scope, ionicMaterialInk, $state) {
		var vm = this;
		vm.icon = "fa-medkit";
		vm.state = 'Midwives';
		vm.image = 'arya.jpg';
		vm.name = 'Arya Stark';

		MidwifeCtrlInit();
		$scope.repeat = repeat;
		$scope.viewNurseMidwife = viewNurseMidwife;
		$scope.viewHospital = viewHospital;

		function viewHospital(lat, lng) {
			$state.go('app.nurse-midwife-hospital', {lat: lat, lng: lng});
		}

		function viewNurseMidwife(id) {
			$state.go('app.midwife-profile', {id: id});
		}

		function repeat(n) {
			return new Array(n);
		}

		function MidwifeCtrlInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}
	}

})();