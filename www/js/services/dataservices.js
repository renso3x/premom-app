(function() {
    'use strict';

    var data = angular.module('app.dataservice', []);
    data.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', '$exceptionHandler'];
    function dataservice($http, $q, $exceptionHandler){
    	var primePromise;

        var service = {
            feedback                   : feedback,
            ready                      : ready
        };

        return service;

        function savePermissionAccess(info) {
            return $http.post('/api/v2/permission/access/' , info).success(permissionAccess)

            function permissionAccess(response, status) {
                return response;
            }
        }

        function getAccess(puserid){
            return $http.get('/api/v2/permission/access/'+ puserid + '/').then(permissionAccess, permissionAccessError)

            function permissionAccess(response, status) {
                return response;
            }

            function permissionAccessError(exception, cause){
                $exceptionHandler(exception, [cause]);
            }
        }


    }

})();