var songListController = function($scope, contentService){
    $scope.songs = [];
    $scope.init = function(){
        contentService.getAllSongs().then(function(result){
            var allSongs = result.data.songs;
            $scope.songs = _.reduce(allSongs,function(songs, value,index) {
                var toBeAdded={};
                toBeAdded.title = value.englishTransliterationTitle;
                toBeAdded.translatedTitle = value.englishTranslationTitle;
                toBeAdded.categoryName = value.category;
                toBeAdded.publish = value.publish;

                if(value.publish)
                    toBeAdded.publish = "Yes";
                
                else 
                    toBeAdded.publish = "No"
                
                toBeAdded.singerNames = _.reduce(value.singers, function(memo, value, index){
                 return (memo + ((index!=0)?', ':'') + value.name);
                 },'');
                toBeAdded.poetNames = _.reduce(value.poet, function(memo, value, index){
                return (memo + ((index!=0)?', ':'') + value.name);
                 },'');
                toBeAdded.id = value.id;
                songs.push(toBeAdded);
                return songs;
            },[])
        });
    }

    $scope.init();
}

adminApp.controller('songListController',['$scope','contentService',songListController]);