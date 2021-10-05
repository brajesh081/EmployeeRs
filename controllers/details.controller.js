export default function ($scope, $http) {
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

  $scope.fieldName;
  $scope.reverseSort = false;

  $scope.customOrderBy = function (name) {
    $scope.reverseSort =
      $scope.fieldName == name ? !$scope.reverseSort : false;
    $scope.fieldName = name;
  };
}