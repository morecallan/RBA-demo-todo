app.controller("ItemNewCtrl", function($scope){
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

    $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = "";
    };
});