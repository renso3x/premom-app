(function() {

	angular
	.module('app.midwife.ctrl', [])
	.controller('MidwifeCtrl', MidwifeCtrl)

	MidwifeCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function MidwifeCtrl($scope, ionicMaterialInk) {
		var vm = this;
		vm.icon = "fa-medkit";
		vm.state = 'Midwives';
		vm.image = 'arya.jpg';
		vm.name = 'Arya Stark';

		MidwifeCtrlInit();
		$scope.repeat = repeat;

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