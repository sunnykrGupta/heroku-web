'use strict';

/**
 * @ngdoc function
 * @name herokuFirstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the herokuFirstestApp
 */
angular.module('herokuFirstestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
