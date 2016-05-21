
var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
    $scope.navItems = [{name: "All Items"}, {name: "New Item"}];
});


app.controller("TodoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;

    $scope.newItem  = function(){
        console.log("you clicked new item");
        $scope.showListView = false;
    };

    $scope.allItems = function() {
        console.log("you clicked all items");
        $scope.showListView = true;
    };

});