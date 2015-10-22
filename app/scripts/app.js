(function () {
    'use strict';


    /**
     * @ngdoc overview
     * @name testerApp
     * @description
     * # testerApp
     *
     * Main module of the application.
     */
    angular
        .module('testerApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
      ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/lovedTracks', {
                    templateUrl: 'views/lovedTracks.html',
                    controller: 'LovedTracksCtrl',
                    controllerAs: 'lovedTracks'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}());
