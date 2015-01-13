var allSongsApp = angular.module('allSongsApp',['thumbnailModule','mediaPlayer','popupSupport','htmlGenerator', 'headerModule', 'infinite-scroll','filterModule']);

allSongsApp.config(resourceUrlWhiteList);
allSongsApp.factory('songsContentService', ['$http', songsContentService]);
allSongsApp.factory('songThumbnailMapper', [songThumbnailMapper]);