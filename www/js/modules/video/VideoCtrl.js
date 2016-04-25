(function() {

	angular
		.module('app.video.ctrl', [])
		.controller('VideoCtrl', VideoCtrl)

	VideoCtrl.$inject = ['$scope'];
	function VideoCtrl($scope) {
		var vm = this;

		$scope.repeat = repeat;

		function repeat(n) {
			return new Array(n);
		}

	}

})();