var mainLandingPageController = function($scope,contentService){
    $scope.thumbnailDetails=null;
    $scope.shouldBeOpen={};
    $scope.getThumbnailDetails = function(){
        if($scope.thumbnailDetails!=null)
            return $scope.thumbnailDetails;
        $scope.thumbnailDetails = contentService.getLandingPageThumbnails().details;
    };

    $scope.open = function(id){
        $scope.shouldBeOpen[id] = true;
    }

    $scope.onClose = function(id){
        $scope.shouldBeOpen[id] = false;
    }

    $scope.shouldShow = function(id){
        return $scope.shouldBeOpen[id];
    }

    $scope.getPopupDetails = function(){
        var details = $scope.getThumbnailDetails();
        var result = _.reduce(details, function(memo, value, index){
            $scope.shouldBeOpen['\'oid'+index+'\''] = false;
            if(value.category=='Songs'){
                return memo+
                    '<pop-up id="oid'+index+'"'+
                    ' width="100" show="shouldShow(\'oid'+index+'\')"'+
                    ' on-close="onClose(\'oid'+index+'\')"'+
                    ' closeButton="true">'+
                        '<div class="mediaWrapper">'+
                            '<h5 class="artistName">'+details[index].singer+'<small> sings</small></h5>'+
                            '<h3 class="projectName">'+details[index].name+'<small>(In this body)</small></h3>'+
                            '<img class="popupMedia image" src="'+details[index].imageUrl+'"/>'+
                        '</div>'+
                    '</pop-up>';
            }
            return memo;
        },'');
        return result;
    }

    $scope.getShiftIndex = function(index){
        return ((4+index) % 6) == 0 ? 6 : ((4+index) % 6);
    };

    $scope.getLandingPageThumbnails = function(){
        var details = $scope.getThumbnailDetails();
        var result = _.reduce(details, function(memo, value, index){
            shiftIndex = $scope.getShiftIndex(index);
            if(value.category=='Songs'){
                return memo + '<song-with-details overlay-id="oid'+index +'"'+
                ' open="open(\'oid'+index+'\')"'+
                ' custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' singer="'+details[index].singer+'"' +
                ' category-name="'+details[index].categoryName+'"'+
                ' poet="'+details[index].poet+'"></song-with-details>';
            }

            if(value.category=='Films'){
                return memo + '<film-with-details overlay-id="oid'+index +'"'+
                ' custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' context="'+details[index].context+'"'+ '></film-with-details>';
            }

            if(value.category=='Reflections'){
                return memo + '<reflection-with-details overlay-id="oid'+index +'"'+
                ' custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' by="'+details[index].by+'"></reflection-with-details>';
            }

            if(value.category=='Words'){
                return memo + '<word-with-details overlay-id="oid'+index + '"'+
                ' custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' contextual-meaning="'+details[index].contextualMeaning+'">' +
                '</word-with-details>';
            }

            if(value.category=='Gathering'){
                return memo + '<gathering-with-details overlay-id="oid'+index  +'"'+
                ' custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' location="'+details[index].location+'"' +
                ' date="'+details[index].date+'">'+
                '</gathering-with-details>';
            }

            if(value.category=='Couplets'){
                return memo + '<couplet-with-details overlay-id="oid'+index +'" custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                '</couplet-with-details>';
            }

        return memo + '<unknown-format overlay-id="oid'+index +'" custom-style="shift'+shiftIndex+'"' +
                ' img-src="'+details[index].imageUrl+'"'+
                ' name="'+details[index].name+'"'+
                ' description="'+details[index].description+'">'+
                '</unknown-format>'},'');

        return result;
    }
}

mainLandingPageApp.controller('mainLandingPageController',['$scope','contentService',mainLandingPageController]);
mainLandingPageApp.directive('bindUnsafeHtml', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          // watch the 'bindUnsafeHtml' expression for changes
          return scope.$eval(attrs.bindUnsafeHtml);
        },
        function(value) {
          // when the 'bindUnsafeHtml' expression changes
          // assign it into the current DOM
          element.html(value);

          // compile the new DOM and link it to the current
          // scope.
          // NOTE: we only compile .childNodes so that
          // we don't get into infinite loop compiling ourselves
          $compile(element.contents())(scope);
        }
    );
};
}]);