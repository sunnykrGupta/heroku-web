'use strict';

/**
 * @ngdoc function
 * @name herokuFirstestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the herokuFirstestApp
 */
angular.module('herokuFirstestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
