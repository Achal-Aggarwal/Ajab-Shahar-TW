'use strict';

thumbnailModule.directive("wordOverview", function() {
    return {
        restrict: 'E',
        scope: {
            id:'@',
            wordOrPhraseTransliteration:'@',
            wordOrPhraseTranslation:'@',
            originalIntro:'@',
            translationIntro:'@',
            transliterationIntro:'@',
            showWordIntro:'@'
        },
        templateUrl:'/user-js/common/templates/words/wordOverview.html',
        controller: function($scope) {
        }
    }
});