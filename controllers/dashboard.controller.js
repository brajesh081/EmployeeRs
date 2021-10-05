export default function($scope,$rootScope,$location,$http){
    $scope.switch = false;
    if($rootScope.loggedInUser === -1){
      $scope.switch = true;
    } else{
      $scope.switch = false;
    }

    $scope.deleteAccount = function (){
      const id = $rootScope.user._id
      var userId = {id}

     var req = {
        method: "DELETE",
        url : `https://employye-backend.herokuapp.com/api/b/user/delete`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(userId),
      }

      $http(req)
        .then((res) => {
          console.log(res);
          if(res.status === 200){
            console.log(res);
            alert("Account Deleted Successfully!!");
            $location.url("/logInForm")
          }
        })
        .catch((res) =>{
          alert("Some error occured");
          console.log(res);
        })

      }
      
      $scope.isEditable = false;
      $scope.data  =  "";
    
      $scope.updateInfo = function(){
        
        $scope.isEditable = true;
    
        $scope.data = $scope.updateAbout;
        console.log(data );
        console.log("inside update abt");
        
      }

      $scope.saveData = function(){
        $scope.users[$rootScope.loggedInUser]["Info"] = $scope.data ;
      }

      $scope.cancelData= function(){
        $location.url("/details")
      }
    
    }