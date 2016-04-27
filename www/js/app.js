(function() {

    var app = angular.module('starter', [
        'ionic',
        'ionic-material',
        'app.utils.directive',
        'app.modules',
        'app.services'
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

    app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.tabs.position('bottom');

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'DashboardCtrl'
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
            .state('app.doctor-profile', {
                url: '/doctor/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/doctor/viewDoctor.html',
                        controller: 'DoctorCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.doctor-hospital', {
                url: '/doctor/hospital/:lat/:lng',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/shared/maps.html',
                        controller: 'MapsCtrl',
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
            .state('app.nurse-profile', {
                url: '/nurse/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/nurse-midwife/viewNurseMidwife.html',
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
            .state('app.midwife-profile', {
                url: '/midwife/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/nurse-midwife/viewNurseMidwife.html',
                        controller: 'MidwifeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.nurse-midwife-hospital', {
                url: '/nurse-midwife/hospital/:lat/:lng',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/shared/maps.html',
                        controller: 'MapsCtrl',
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
            .state('app.questions', {
                url: '/questions',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/questions/questions.html',
                        controller: 'QuestionCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.single_question', {
                url: '/question/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/questions/single_question.html',
                        controller: 'QuestionCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.videos', {
                url: '/videos',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/videos/videos.html',
                        controller: 'VideoCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.postnatal', {
                url: '/postnatal',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/checklist/checklist.html',
                        controller: 'PostnatalCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.prenatal', {
                url: '/prenatal',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/checklist/checklist.html',
                        controller: 'PrenatalCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.guides', {
                url: '/guides',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/guides/guide.html',
                        controller: 'GuideCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.compose', {
                url: '/compose/:email',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/message/compose.html',
                        controller: 'ComposeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/profile/user-profile.html',
                        controller: 'ProfileCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.inbox', {
                url: '/inbox',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/message/inbox.html',
                        controller: 'InboxCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.view-message', {
                url: '/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/views/modules/message/view-message.html',
                        controller: 'InboxCtrl',
                        controllerAs: 'vm'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/dashboard');
    });

})()