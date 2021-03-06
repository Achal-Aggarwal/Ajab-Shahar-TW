featuredContentApp.factory('mainLandingContentService', ['$http',function ($http) {
    var getMainLandingPageThumbnails = function () {
        return {
            songs: $http.get('/api/songs/getPublishedSongs'),
            words: $http.get('/api/words?showOnMainLandingPage=true'),
            reflections: $http.get('/api/reflections/completeInfo?content=featured')
        };
    };

    var getSongsLandingPageThumbnails = function () {
        return $http.get('/api/songs/getPublishedSongs');
    };

    return {
        getMainLandingPageThumbnails: getMainLandingPageThumbnails,
        getSongsLandingPageThumbnails: getSongsLandingPageThumbnails

    };
}]);
