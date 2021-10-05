angular.module("logInApp").controller("signUpController" , function ($scope,$rootScope, $http, $location) {
  $scope.signup = function () {
    console.log("in signup");
    var formData = {};

    formData.firstName = $scope.firstName;
    formData.lastName = $scope.lastName;
    formData.department = $scope.department;
    formData.info = $scope.about;
    formData.email = $scope.email;
    formData.password = $scope.password;
   
    var req = {
      method: "POST",
      url: `https://employye-backend.herokuapp.com/api/b/signup`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
      
    };
    $http(req)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          $rootScope.loggedIn = true;
          $rootScope.user = res?.data?.user;
          $location.url("/dashboard");
    
        }
      })
     
      .catch((err) => {
        if (err.status === 400) {
          alert("User with this email id already registered");
        } else {
          alert("Some error");
        }
      });
  };
})