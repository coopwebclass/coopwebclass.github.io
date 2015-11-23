'use strict';

/**
 * @ngdoc function
 * @name coopwebclassgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coopwebclassgithubioApp
 */
angular.module('coopwebclassgithubioApp')
  .controller('MainCtrl', function($scope) {
    $scope.test = [
      {name: 'Mason'},
      {name: 'Joe'},
      {name: 'Chloe'},
      {name: 'Bob'}
    ];
  });
