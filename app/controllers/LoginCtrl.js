app.controller("LoginCtrl", function($scope, $location, firebaseURL, authFactory){
    let ref = new Firebase(firebaseURL);
    console.log("ref", ref);

    $scope.hasUser = false;

    $scope.account = {
        email: "",
        password: ""
    };

    if ($location.path() === "/logout") {
        ref.unauth();
    }

    $scope.register = () => {
        ref.createUser({
            email: $scope.account.email,
            password: $scope.account.password
        }, (error, userData) => {
            if (error) {
            } else if (userData) {
                $scope.login();
            }
        })
    };

    $scope.login = () => {
        authFactory
            .authenticate($scope.account)
            .then(()=> {
                $location.path("/");
                $scope.hasUser = true;
                $scope.$apply();
            })
    };


});