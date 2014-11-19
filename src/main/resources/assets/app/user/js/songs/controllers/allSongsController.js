var allSongsController = function($scope,songsContentService,popupService){
    $scope.songs=[];
    $scope.songDetails=[];
    $scope.totalSongs = null;
    $scope.totalFilteredSongs = 0;
    $scope.detailsService = popupService;
    $scope.activeLetter = '';
    $scope.filterOn = false;
    $scope.songsList = null;

    var i = 0;

    $scope.getTotalSongsCount = function(){
        songsContentService.getAllSongs().then(function(songsList){
            $scope.totalSongs = songsList.data.length;
            $scope.totalFilteredSongs = $scope.totalSongs;
        });
    }

    $scope.removeSongs = function(){
        i = 0;
        $scope.songs.splice(0, $scope.songs.length);
        $scope.songDetails.splice(0, $scope.songDetails.length);
    }

    $scope.filterSongsBasedOnAlphabets = function(letter){
        $scope.filterOn = true;
        $scope.activeLetter = letter;
        $scope.removeSongs();
        $scope.loadSongFromRange();

        songsContentService.getSongsStartingWith($scope.activeLetter).then(function(songsCountJson){
            $scope.totalFilteredSongs = songsCountJson.data;
        });
    }

    $scope.loadSongFromRange = function(){
        if(i <= $scope.totalFilteredSongs){
        	songsContentService.getSongsInRangeAndFilteredBy(i, $scope.activeLetter).then(function(result){
                $scope.songs = result.data;
                i += 9;
            });
        }
    }
};

allSongsApp.controller('allSongsController',['$scope','songsContentService','popupService',allSongsController]);