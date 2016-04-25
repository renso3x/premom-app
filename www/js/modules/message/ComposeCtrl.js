(function() {

	angular
		.module('app.compose.ctrl', [])
		.controller('ComposeCtrl', ComposeCtrl)

	ComposeCtrl.$inject = ['$scope', '$stateParams'];
	function ComposeCtrl($scope, $stateParams) {
		var vm = this;
		$scope.message = {};
		$scope.message.to = $stateParams.email;

		$scope.send = send;

		function send() {
			console.log($scope.message);
		}
	}

})();