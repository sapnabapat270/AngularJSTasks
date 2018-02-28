var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
    $scope.companyName="Jeavio";
    $scope.address="4th Floor Siddharth Complex";
    $scope.getCompany=function(){
        console.log("Company name:" +this.companyName);
        console.log("Company address:"+this.address);

    }
    console.log($scope);
    console.log($scope.getCompany());
}]);

