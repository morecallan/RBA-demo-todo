app.factory("itemStorage", function($q, $http){

    var getItemList = function(){
        return $q(function(resolve, reject){
          $http.get("https://callan-todo.firebaseio.com/items/.json")
            .success(function(itemObject){ 
                var items = [];
                Object.keys(itemObject).forEach(function(key){ //using the keys method on js's object. loops through the object and pulls out our keys and returns array of keys. for each of these keys
                    itemObject[key].id=key; //go through the item collection object by each key and sets the id value to the key value
                    items.push(itemObject[key]); //pushes each itemCollection object to the $scope array
                });
                resolve(items);
            })
            .error(function(error){
                reject(error);
            });  
        }); 
    };

    var deleteItem = function(itemId){
        return $q(function(resolve, reject){
            $http
            .delete(`https://callan-todo.firebaseio.com/items/${itemId}.json`)
            .success(function(objectFromFirebase){
                resolve(objectFromFirebase);
            })
            .error(function(error){
                reject(error);
            });
        });
    };



    return {getItemList:getItemList, deleteItem: deleteItem};
});