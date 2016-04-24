(function() {

    var app = angular.module('starter', [
        'ionic',
        'ionic-material',
        'app.utils.directive',
        'app.modules',
    ]);

    app.run(function ($ionicPlatform, ionicMaterialInk) {
        ionicMaterialInk.displayEffect();

        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/login.html',
                        controller: function(ionicMaterialInk) {
                            ionicMaterialInk.displayEffect();
                        }
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/register.html',
                        controller: function(ionicMaterialInk) {
                            ionicMaterialInk.displayEffect();
                        }
                    }
                }
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/dashboard.html',
                        controller: function(ionicMaterialInk) {
                            ionicMaterialInk.displayEffect();
                        }
                    }
                }
            })
            .state('app.doctor', {
                url: '/doctors',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/doctor/doctors.html',
                        controller: 'DoctorCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.nurse', {
                url: '/nurse',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/nurse-midwife/nurse-midwife.html',
                        controller: 'NurseCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.midwife', {
                url: '/midwife',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/nurse-midwife/nurse-midwife.html',
                        controller: 'MidwifeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.hospital', {
                url: '/hospital',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/facilities/facility.html',
                        controller: 'HospitalCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.healthcenter', {
                url: '/healthcenter',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/facilities/facility.html',
                        controller: 'HealthCenterCtrl',
                        controllerAs: 'vm'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/dashboard');
    });

})()