var landingPagesApp = angular.module('landingPagesApp',['angular-parallax','thumbnailModule','mediaPlayer','popupSupport','htmlGenerator','sticky','headerModule', 'djds4rce.angular-socialshare']);

landingPagesApp.config(resourceUrlWhiteList);
landingPagesApp.factory('contentService', ['$http', contentService]);

landingPagesApp.run(function($FB){
  $FB.init('714039208665351');
});
 
landingPagesApp.config(function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
});

landingPagesApp.directive('bindDynamicHtml', ['$compile', bindDynamicHtml]);