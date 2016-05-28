var app = angular.module("TodoApp", ["ngRoute"])
    .constant("firebaseURL","https://callan-todo.firebaseio.com/");

let isAuth = (authFactory) => new Promise((resolve, reject) => {
    if (authFactory.isAuthenticated()) {
        console.log("user is authenticated, resolve route promise");
        resolve();
    } else {
        console.log("user is not authenticated, reject route promise");
        reject();    
    }
});


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/item-list.html",
            controller:  "ItemListCtrl",
            resolve: {isAuth}
        })
        .when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller:  "ItemListCtrl",
            resolve: {isAuth}
        })
        .when("/items/details/:itemId", {
            templateUrl: "partials/item-details.html",
            controller:  "ItemViewCtrl",
            resolve: {isAuth}

        })
        .when("/items/new", {
            templateUrl: "partials/item-new.html",
            controller:  "ItemNewCtrl",
            resolve: {isAuth}
        })
        .when("/items/:itemId/edit", {
            templateUrl: "partials/item-new.html",
            controller:  "ItemEditCtrl",
            resolve: {isAuth}

        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller:  "LoginCtrl",
        })
        .when("/logout", {
            templateUrl: "partials/login.html",
            controller:  "LoginCtrl",
        })
        .otherwise("/");    
});

app.run(($location) => {
    let toDoRef = new Firebase("https://callan-todo.firebaseio.com/");

    toDoRef.onAuth(authData => {
        if(!authData) {
            $location.path("/login");
        }
    })
})