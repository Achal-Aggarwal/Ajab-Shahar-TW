htmlGenerator.factory('introductionPopupService', function () {
    var getName = function (person) {
      var firstName = person.firstName,
      middleName = person.middleName,
      lastName = person.lastName;

      return firstName + prependSpaceIfNotEmpty(middleName) + prependSpaceIfNotEmpty(lastName);
    };

    var prependSpaceIfNotEmpty = function(string) {
      return (string != "") ? string = ' ' + string : string = string;
    };

    var getPopupDetails = function (details,contentType) {
      var startIndex =-1;

      var songPopups = _.reduce(details.songs, function(memo, value, index){
            startIndex++;
            var id = 'song_'+details.songs[index].id;
            return memo+
                '<pop-up ng-init="detailsService.init('+startIndex+',\''+id+'\')" id="'+id+'" width="100" on-next="detailsService.next('+index+')" on-prev="detailsService.prev('+index+')" show="detailsService.shouldShow(\''+id+'\')"'
                + ' on-close="detailsService.onClose(\''+id+'\')" closeButton="true">'
                  + '<song-introduction id="'+id+'" singer="'+getName(details.songs[index].singers[0])+'" name="'+details.songs[index].englishTranslation+'"'
                  + ' audio-Url="' + details.songs[index].soundCloudTrackID + '"'
                  + ' video-Url="'+details.songs[index].youtubeVideoId+'" close-video="detailsService.isClosed(\''+id+'\')"></song-introduction>'
                +'</pop-up>';
      },'');

      var coupletPopups = '';
//      var coupletPopups = _.reduce(details.couplets, function(memo, value, index){
//            startIndex++;
//            var id = 'couplet_'+details.couplets[index].id;
//            return memo+
//                '<pop-up ng-init="detailsService.init('+startIndex+',\''+id+'\')" id="'+id+'" width="100" on-next="detailsService.next('+index+')" on-prev="detailsService.prev('+index+')" show="detailsService.shouldShow(\''+id+'\')"'
//                + ' on-close="detailsService.onClose(\''+id+'\')" closeButton="true">'
//                  + '<couplet-introduction id="'+id+'" poet="'+getName(details.couplets[index].poets[0])+'" name="'+details.couplets[index].englishTranslation+'"'
//                  + ' close-video="detailsService.isClosed(\''+id+'\')"></couplet-introduction>'
//                +'</pop-up>';
//      },'');

      return songPopups + coupletPopups;
  };

  return {
    getPopupDetails: getPopupDetails,
  };
});