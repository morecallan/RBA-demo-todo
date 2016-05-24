app.controller("ItemListCtrl", function($scope, $http){
    $scope.items = [];

    $http.get("https://callan-todo.firebaseio.com/items/.json")
    .success(function(itemObject){
        var itemCollection = itemObject; //get to your object of objects
        Object.keys(itemCollection).forEach(function(key){ //using the keys method on js's object. loops through the object and pulls out our keys and returns array of keys. for each of these keys
            itemCollection[key].id=key; //go through the item collection object by each key and sets the id value to the key value
            $scope.items.push(itemCollection[key]); //pushes each itemCollection object to the $scope array
        });
    });
});