export default  function($scope,$rootScope,$http){

  
      $scope.showDetails = function (){
      console.log("in sh D 1");
      $http({
        method: "GET",
        url: "http://localhost:8000/api/students"
      }).then((res) =>{
        $scope.students = res;
      })
      .catch(() => {
        console.log("some error occured!!!");
      })

      console.log("in sh D 2");
    }



    
    // console.log($rootScope);
    }
  