'use strict';

/**
 * @ngdoc function
 * @name coopwebclassgithubioApp.controller:AssignmentsCtrl
 * @description
 * # AssignmentsCtrl
 * Controller of the coopwebclassgithubioApp
 */
angular.module('coopwebclassgithubioApp')
  .controller('AssignmentsCtrl', function($scope) {
    $scope.assignments = [ { 
        title: 'Basic HTML & CSS 1',
        desc: 'Learn the foundation of Web Design & Development. Every document, including the one you are reading now, is an HTML document that is styled with CSS!!! :)',
        date: {
          month: 'Dec',
          day: '12'
        }
      },
      { 
        title: 'Basic HTML & CSS 2',
        desc: 'Learn the foundation of Web Design & Development. Every document, including the one you are reading now, is an HTML document that is styled with CSS!!! :)',
        date: {
          month: 'Dec',
          day: '12'
        }
      },
      { 
        title: 'Basic HTML & CSS 3',
        desc: 'Learn the foundation of Web Design & Development. Every document, including the one you are reading now, is an HTML document that is styled with CSS!!! :)',
        date: {
          month: 'Dec',
          day: '12'
        }
      }
    ];
  });
