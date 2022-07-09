var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope, $http) {
  $scope.currentAverage = 0;
  $scope.currentInvestment = 0;
  $scope.currentShares = 0;
  $scope.currentPrice = 0;
  $scope.newInvestment = 0;
  $scope.newShares = 0;

  $scope.getCurrentAverage = function(){
    $scope.currentAverage = $scope.currentInvestment / $scope.currentShares;
  }

  $scope.getCurrentInvestment = function(){
    $scope.currentInvestment = $scope.currentAverage * $scope.currentShares;
  }  

  $scope.getCurrentShares = function(){
    $scope.currentShares = $scope.currentInvestment / $scope.currentAverage;
  }; 

  $scope.getNewInvestment = function(){
    $scope.newInvestment = $scope.newShares * $scope.currentPrice;
  }; 

  $scope.getNewShares = function(){
    $scope.newShares = $scope.newInvestment / $scope.currentPrice;
  };   

  $scope.newAverage = ($scope.currentInvestment + $scope.newInvestment)/($scope.currentShares + $scope.newShares);


});