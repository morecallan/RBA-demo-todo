app.controller("ItemNewCtrl", function($scope, $http, $location){
    $scope.newTask = {
        task: "",
        isCompleted: false,
        dueDate: "",
        assignedTo: "",
        location: "",
        urgency: "",
        dependencies: ""
     };



    $scope.addNewItem = function() {
        $http.post(
            "https://callan-todo.firebaseio.com/items/.json", 
            JSON.stringify({
                task: $scope.newTask.task,
                isCompleted: false,
                dueDate: $scope.newTask.dueDate,
                assignedTo: $scope.newTask.assignedTo,
                location: $scope.newTask.location,
                urgency: $scope.newTask.urgency,
                dependencies: $scope.newTask.dependencies,
            })
        ).success(function(response){
            $location.url("items/list");
            $scope.newTask = "";
        });
    };
});