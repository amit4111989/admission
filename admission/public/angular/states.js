(function() {
    'use strict';

    angular.module('ng.admission').config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');
                $urlRouterProvider.when('/',
                    '/home');

                var states = [];

                /* ############################## ROOT ################################ */
                states.push({
                    name: 'root',
                    url: '/',
                    abstract: 'true',
                    templateUrl: 'root.html',
                });

                /* ############################## PARTIALS ############################# */

                states.push({
                    name: 'root.home',
                    url: 'home',
                    templateUrl: 'home.html',
                    controller: 'homeCtrl',
                });


                _(states).forEach(function(state) {
                    $stateProvider.state(state);
                });
            }
        ]);
}());
