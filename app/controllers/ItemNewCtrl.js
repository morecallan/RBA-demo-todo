app.controller("ItemNewCtrl", function($scope, $http, $routeParams, $location, itemStorage, authFactory){
    $scope.title = "New Item";
    $scope.submitButtonText = "Add New Item";

    $scope.newTask = {
        task: "",
        isCompleted: false,
        dueDate: "",
        assignedTo: "",
        location: "",
        urgency: "",
        dependencies: "",
        uid: ""
     };

    $scope.addNewItem = function() {
        itemStorage.addNewItem($scope.newTask)
        .then(function successCallback(response){
            $location.url("/item/list");
        });
    };


});