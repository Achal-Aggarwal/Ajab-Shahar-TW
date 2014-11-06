mediaPlayer.directive('soundCloud', function($window, YT_event) {
  return {
    restrict: "E",

    scope: {
      height: "@",
      width: "@",
      audioUrl: '@',
      shouldStopVideo:'&',
      id:'@',
    },

    template: '<div id="{{id}}"></div>',

    link: function(scope, element, attrs, $rootScope) {
        SC.initialize({
            client_id: "694f15bbffd7ae8e6e399f49dd228725"
        });

        scope.loadTrack = function(trackID){
              SC.get("/tracks/" + trackID, {limit: 1}, function(track){
                console.log("Track URL: "+ track.uri);
                SC.oEmbed(track.uri, document.getElementById(scope.id));
              });
        }

        scope.pauseTrack = function(){
            var iframeElement = document.querySelector('iframe');
            var widget1         = SC.Widget(iframeElement);
            console.log("working" + widget1);
            widget1.pause();
        }

        scope.playTracks = function(){
            var iframeElement = document.querySelector('iframe');
            var widget1         = SC.Widget(iframeElement);
            console.log("working" + widget1);
            widget1.play();
        }

        scope.loadTrack(scope.audioUrl);
    }
  };
});