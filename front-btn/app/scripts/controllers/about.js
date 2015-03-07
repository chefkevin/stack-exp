'use strict';

/**
 * @ngdoc function
 * @name frontBtnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontBtnApp
 */
angular.module('frontBtnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
