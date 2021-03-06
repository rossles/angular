(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name testerApp.controller:LovedTracksCtrl
     * @description
     * # LovedTracksCtrl
     * Controller of the testerApp
     */
    angular.module('testerApp')
        .controller('LovedTracksCtrl', function ($scope, LastFmService) {

            LastFmService.getLovedTracks().then(function (lovedTracks) {
                $scope.lovedTracks = lovedTracks;
            }).catch(function () {
                console.error('could not retrieve loved tracks');
            });

            LastFmService.getMostPlayed().then(function (mostPlayedTracks) {
                $scope.mostPlayedTracks = mostPlayedTracks;
            }).catch(function () {
                console.error('Could not fetch most played tracks');
            });


            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
}());
