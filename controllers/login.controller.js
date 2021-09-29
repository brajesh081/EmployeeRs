export default function($rootScope ,$scope,$http,$location){
    
  $scope.validate = function(){

        
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

}