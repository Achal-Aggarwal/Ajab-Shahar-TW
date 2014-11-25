'use strict';

thumbnailModule.directive("songIntroductionMapper", function(nameService) {
    return {
        restrict: 'E',
        scope: {
            details:'=',
            customStyle:'@',
            showDetailsService:'=',
            index:'@',
            totalCount:'@'
        },
        templateUrl:'/user/js/common/templates/mappers/introduction/songIntroductionMapper.html',
        controller:function($scope){
            $scope.song = {"id":"song_"+$scope.details.id, "videoId":$scope.details.youtubeVideoId,"englishTranslation":$scope.details.songTitle.englishTranslation,
                            "singer":nameService.getName($scope.details.singers[0]) , "audioId":$scope.details.soundCloudTrackID,
                            "poet":nameService.getName($scope.details.poets[0])
                        };
        }
    }
});