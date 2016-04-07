(function() {
  'use strict';

  angular
    .module('premom', [
      'ionic',
      'app.authentication.module',
      'app.practitioners.module',
      'app.facilities.module'
    ])
    .config(appConfig)
    .run(appRun)

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login')

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/modules/authentication/views/login.html',
        controller: 'LoginController',
        contollerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/modules/authentication/views/register.html',
        controller: 'RegisterController',
        contollerAs: 'vm'
      })
      .state('app', {
        abstract : true,
        url:'/app',
        templateUrl: 'js/modules/templates/scaff.html',
      })
      .state('app.doctor', {
        url: '/doctor',
        views: {
          'pageContent': {
            templateUrl: 'js/modules/practitioners/views/list.html',
            controller: 'DoctorController',
            controllerAs: 'vm',
          }
        }
      })
      .state('app.profile', {
        url: '/doctor/profile/:doctorId',
        views: {
          'pageContent': {
            templateUrl: 'js/modules/practitioners/views/profile.html',
            controller: 'ProfileController',
          }
        },
      })
      .state('app.hospital', {
        url: '/hospital',
        views: {
          'pageContent': {
            templateUrl: 'js/modules/facilities/views/hospitals.html',
            controller: 'FacilitiesController',
          }
        },
      })
      .state('app.viewHospital', {
        url: '/hospital/:hospitalId',
        views: {
          'pageContent': {
            templateUrl: 'js/modules/facilities/views/view-hospital.html',
            controller: 'FacilitiesController',
          }
        },
      })
  }

  function appRun($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
})();