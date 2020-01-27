var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {


$scope.cityList = ['MUMBAI','BANGALORE','DELHI','PUNE','CHENNAI']

$scope.data = {
  selectCity:$scope.cityList[0]
}

$scope.fetchData = function(){
  $http({
  method: 'GET',
  url: 'https://vast-shore-74260.herokuapp.com/banks?city='+$scope.data.selectCity
}).then(function successCallback(response) {
  $scope.bankList = response.data
  }, function errorCallback(response) {
  });
}
$scope.fetchData()

});
