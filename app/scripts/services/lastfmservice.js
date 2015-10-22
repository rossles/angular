(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name testerApp.LastFmService
     * @description
     * # LastFmService
     * Service in the testerApp.
     */
    angular.module('testerApp')
        .service('LastFmService', function ($http, LAST_FM) {
            // AngularJS will instantiate a singleton by calling "new" on this function

            return {
                getLovedTracks: function () {
                    //return the promise directly.
                    return $http({
                        method: 'GET',
                        url: LAST_FM.URL,
                        params: {
                            api_key: LAST_FM.API_KEY,
                            user: LAST_FM.USER,
                            method: 'user.getlovedtracks',
                            format: LAST_FM.FORMAT
                        }
                    }).then(function (result) {
                        //resolve the promise as the data
                        console.info(result.data.lovedtracks.track);
                        return result.data.lovedtracks.track;
                    });
                },
                getMostPlayed: function () {
                    return $http({
                        method: 'GET',
                        url: LAST_FM.URL,
                        params: {
                            api_key: LAST_FM.API_KEY,
                            user: LAST_FM.USER,
                            method: 'user.gettoptracks',
                            format: LAST_FM.FORMAT,
                            period: '1month'
                        }
                    }).then(function (result) {
                        var tracks = result.data.toptracks.track;
                        console.info(tracks);

                        angular.forEach(tracks, function (track) {
                            track.playcount = parseFloat(track.playcount);
                        });
                        return tracks;
                    });
                }
            };
        });
}());
