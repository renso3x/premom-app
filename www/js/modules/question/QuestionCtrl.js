(function() {

	angular
		.module('app.question.ctrl', [])
		.controller('QuestionCtrl', QuestionCtrl)

	QuestionCtrl.$inject = ['$scope', 'ionicMaterialInk'];
	function QuestionCtrl($scope, ionicMaterialInk) {
		var vm = this;

		QuestionInit();

		$scope.repeat = repeat;
		$scope.submitComment = submitComment;


		function submitComment(comment) {
			console.log(comment);
		}

		function QuestionInit() {
			$scope.$on('ngLastRepeat.mylist',function(e) {
				ionicMaterialInk.displayEffect();
			});
		}

		function repeat(n) {
			return new Array(n);
		}
	}

})()