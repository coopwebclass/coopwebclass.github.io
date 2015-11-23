'use strict';

/**
 * @ngdoc function
 * @name coopwebclassgithubioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the coopwebclassgithubioApp
 */
angular.module('coopwebclassgithubioApp')
  .controller('ContactCtrl', function($scope) {
    $scope.test = [
      {name: 'Mason'},
      {name: 'Joe'},
      {name: 'Chloe'},
      {name: 'Bob'}
    ];
  });
