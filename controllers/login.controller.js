// export default 
angular.module("logInApp").controller("logInController", 
function($rootScope ,$scope,$http,$location){
  
  $scope.login = function(){  
  var formData = {}
  formData.email = $scope.email;
  formData.password = $scope.password;

  console.log(formData);

    var req = {
            method : "POST",
            url: `https://employye-backend.herokuapp.com/api/b/signin`,
            headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify(formData),
       }

       $http(req)
         .then((res) => {
            console.log(res.data.user);
            $rootScope.user = res.data.user;
            $rootScope.loggedInUser = true;
            $location.url("/dashboard");
         })
         .catch((res) =>{
               alert("Please Enter valid email and Password")
               console.log(res);
         })
      }


      $scope.fbLogin = function(){
        loginProvider.facebookSignIn().then((user) => {
          var fbUser = {};
          fbUser.firstName = user.displayName;
          fbUser.lastName = "lol";
          fbUser.email = user.email;
          fbUser.info = user.uid;
          fbUser.department = "FB USER"
          fbUser.password = "passfb"

          var req = {
            method: "POST",
            url: `https://employye-backend.herokuapp.com/api/b/signup`,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data: JSON.stringify(fbUser),

          };
          $http(req)
            .then((res) => {
              if (res.status === 200) {
                console.log(res);
                $rootScope.loggedInUser = true;
                $rootScope.user = res?.data?.user;
                $location.url("/dashboard");
          
              }
            })
            .catch((err) => {
              // if (res.status === 200) {
                console.log(err);
                $rootScope.loggedInUser = true;
                $rootScope.user = fbUser;
                $location.url("/dashboard");
          
              // }
            })

        })
      }

  
  })

