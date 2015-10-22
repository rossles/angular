'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
    .controller('LovedTracksCtrl', function ($scope, LastFmService) {

        LastFmService.getLovedTracks().then(function (lovedTracks) {
            $scope.lovedTracks = lovedTracks;
        }).catch(function () {
            console.error('could not retrieve loved tracks');
        });

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
