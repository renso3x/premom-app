(function() {
    angular
        .module('app.utils.directive', [])
        .directive('ngLastRepeat', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit('ngLastRepeat'+ (attr.ngLastRepeat ? '.'+attr.ngLastRepeat : ''));
                        });
                    }
                }
            }
        });
})()