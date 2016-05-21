app.controller("NavCtrl", function($scope){
    $scope.navItems = [{name: "Logout", urlExtend: "#/logout"}, {name: "All Items", urlExtend: "#/items/list"}, {name: "New Item", urlExtend: "#/items/new"}];
});