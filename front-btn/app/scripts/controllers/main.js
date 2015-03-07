'use strict';

/**
 * @ngdoc function
 * @name frontBtnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontBtnApp
 */
angular.module('frontBtnApp')
  .controller('MainCtrl', function ($scope, ApiLogger, $window) {
    
    var buttonClasses = ['btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5'];

    var generateColor = function () {
        return "rgba(" + Math.floor(Math.random() * 200) + ","
                       + Math.floor(Math.random() * 200) + ","
                       + Math.floor(Math.random() * 200) + ",0.4)";
    }

    $scope.buttons = [
        { name: 'success', class: 'btn-success', style: {}},
        { name: 'danger', class: 'btn-danger', style: {}},
        { name: 'warning', class: 'btn-warning', style: {}},
        { name: 'default', class: 'btn-default', style: {}}
    ];

    var randomizeButtons = function () {
        _.map($scope.buttons, function (button) {
            button.class = _.sample(buttonClasses);
            button.style = {
                position: 'absolute',
                'background-color': generateColor(),
                top: Math.random() * $window.innerHeight,
                left: Math.random() * $window.innerWidth,
                height: 50 + Math.random() * 100,
                width: 50 + Math.random() * 100
            }
            return button;
        });
    };
    // Init positions
    randomizeButtons();

    $scope.click = function (button) {
        ApiLogger.logEvent(button);

        randomizeButtons();
    };
  });
