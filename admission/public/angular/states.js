(function() {
    'use strict';

    angular.module('ng.admission').config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');


                var states = [];

                /* ############################## ROOT ################################ */
                states.push({
                    name: 'root',
                    url: '/',
                    abstract: 'true',
                    templateUrl: 'root.hjs',
                });


                /* ############################## PARTIALS ############################# */

                states.push({
                    name: 'root.home',
                    url: 'home',
                    templateUrl: '/views/home.hjs',
                    controller: 'homeCtrl',
                });


                _(states).forEach(function(state) {
                    $stateProvider.state(state);
                });
            }
        ]);
}());
