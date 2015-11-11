'use strict';

angular.module('<%=angularAppName%>')
  .config(function ($stateProvider) {
      $stateProvider
        .state('cookiepolicy', {
            parent: 'site',
            url: '/cookiepolicy',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'scripts/app/cookiepolicy/cookiepolicy.html'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('cookiepolicy');
                    return $translate.refresh();
                }]
            }
        });
  });