(function() {

	angular
	.module('app.nurse.ctrl', [])
	.controller('NurseCtrl', NurseCtrl)

	NurseCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function NurseCtrl($scope, ionicMaterialInk) {
		var vm = this;
		vm.icon = "fa-stethoscope";
		vm.state = 'Nurses';
		vm.image = 'daenerys.jpg';
		vm.name = 'Daenerys Targaryean';

		NurseCtrlInit();
		$scope.repeat = repeat;

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