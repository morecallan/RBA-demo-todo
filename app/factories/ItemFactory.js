app.factory("itemStorage", function($q, $http, firebaseURL, authFactory){


    var addNewItem = function(newItem){
        let user = authFactory.getUser();                        
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "items.json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

    var getItemList = function(){
        let user = authFactory.getUser();               
        return $q(function(resolve, reject){
          $http.get(`${firebaseURL}items/.json?orderBy="uid"&equalTo="${user.uid}"`)
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
            .delete(`${firebaseURL}items/${itemId}.json`)
            .success(function(objectFromFirebase){
                resolve(objectFromFirebase);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

    var getSingleItem = function(itemId){
          return $q(function(resolve, reject){
          $http.get(`${firebaseURL}items/${itemId}.json`)
            .success(function(itemObject){ 
                resolve(itemObject);
            })
            .error(function(error){
                reject(error);
            });  
        }); 
    };

    var updateItem = function(itemId, newItem){
        let user = authFactory.getUser();                        
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + itemId + ".json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

    var updateCompletedStatus = function(newItem){
        let user = authFactory.getUser();                        
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + newItem.id + ".json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    }; 

    return {getItemList:getItemList, deleteItem: deleteItem, getSingleItem: getSingleItem, updateItem: updateItem, updateCompletedStatus: updateCompletedStatus, addNewItem: addNewItem};
});