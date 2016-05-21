
var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
    $scope.navItems = [{name: "All Items"}, {name: "New Item"}];
});


app.controller("TodoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};


    $scope.items = [
        {
            id: 0,
            task: "mow the lawn",
            isCompleted: true,
            dueDate: "12/5/17",
            assignedTo: "Greg",
            location: "Zoe's house",
            urgency: "low",
            dependencies: "sunshine, clippers, hat, water"
        },
        {
            id: 1,
            task: "grade quizzes",
            isCompleted: false,
            dueDate: "12/5/15",
            assignedTo: "Joe",
            location: "NSS",
            urgency: "high",
            dependencies: "wifi, tissues, vodka"
        },
        {
            id: 2,
            task: "take a nap",
            isCompleted: false,
            dueDate: "5/21/17",
            assignedTo: "zoe",
            location: "Zoe's house",
            urgency: "medium",
            dependencies: "cat, pillow, blanket, hammock"
        }
    ];

    $scope.newItem  = function(){
        $scope.showListView = false;
    };

    $scope.allItems = function() {
        $scope.showListView = true;
    };

    $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = "";
    };

});