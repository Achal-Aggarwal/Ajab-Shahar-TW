var coupletDetailsController = function($scope, $http){
    $scope.formInfo = {};
      $scope.saveData = function(){
      $http.post('/api/couplets',$scope.formInfo).success(function(){
              alert("Data added");
           });
    };
 };
adminApp.controller('coupletDetailsController',['$scope','$http',coupletDetailsController]);