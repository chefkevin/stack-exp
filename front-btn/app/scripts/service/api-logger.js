'use strict';

/**
 * @ngdoc function
 * @name frontBtnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontBtnApp
 */
angular.module('frontBtnApp')
  .service('ApiLogger', function ($http, backendUrl) {

    var serializeParameters = function (params) {
        return _.reduce(params, function(result, val, key) {
            if (typeof val === 'object') {
                result += key + '=[' + serializeParameters(val) + ']&';
            } else {
                result += key + '=' + val + '&';
            }
            return result;
        }, '').slice(0, -1);
    };

    var logEvent = function (params) {

        var serializedParams = '?' + serializeParameters(params);

        $http.get(backendUrl + serializedParams)
    };

    return {
        logEvent: logEvent
    }
  });
