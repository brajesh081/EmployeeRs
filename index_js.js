import dashboardController from "./controllers/dashboard.controller.js";
import detailsController from "./controllers/details.controller.js";
import loginController from "./controllers/login.controller.js";
import signupController from "./controllers/signup.controller.js";
import routeConfig from "./routeConfig.js";

var app = angular
  .module("logInApp", ["ngRoute"])
  .run(function ($rootScope) {
    $rootScope.user ;
    $rootScope.loggedInUser = false;
  })
  .config(routeConfig)
  .controller("logInController",loginController )
  .controller("signUpController", signupController)
  .controller("dashboardController", dashboardController)
  .controller("detailsController", function ($scope, $http) {
    $http({
      method: "GET",
      url: "https://employye-backend.herokuapp.com/api/b/employees",
    })
      .then((res) => {
        console.log(res);
        $scope.user = res;
      })
      .catch(() => {
        alert("Something went wrong");

      });

      
    $scope.fieldName ;
    $scope.reverseSort = false;

    $scope.customOrderBy = function(name){
      $scope.reverseSort = ($scope.fieldName == name)?!$scope.reverseSort:false;
      $scope.fieldName = name;}
  });
