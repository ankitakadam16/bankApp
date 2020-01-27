var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {


$scope.cityList = ['MUMBAI','BANGALORE','DELHI','PUNE','CHENNAI']

$scope.data = {
  selectCity:$scope.cityList[0],
  searchText :''
}
$scope.data.searchText =''
$scope.fetchData = function(){
  var url = 'https://vast-shore-74260.herokuapp.com/banks'
  if ($scope.data.searchText.length>0) {
    url = '?city__icontains='+$scope.data.searchText
  }
  else{
    url += '?city='+$scope.data.selectCity
  }
  $http({
  method: 'GET',
  url: url
}).then(function successCallback(response) {
  $scope.bankList = response.data
  }, function errorCallback(response) {
  });
}
$scope.fetchData()

});
