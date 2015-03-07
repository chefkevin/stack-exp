'use strict';

/**
 * @ngdoc overview
 * @name frontBtnApp
 * @description
 * # frontBtnApp
 *
 * Main module of the application.
 */
angular
  .module('frontBtnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('backendUrl', 'http://dev.stack-exp.com');
