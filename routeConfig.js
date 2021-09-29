export default function ($routeProvider){
    $routeProvider
      .when("/logInForm" , {
        templateUrl: "templates/logInForm.html",
        controller: "logInController"
      })
      .when("/signUpForm",{
        templateUrl: "templates/signUpForm.html",
        controller: "signUpController"
      })
      .when("/dashboard",{
        templateUrl: "templates/dashboard.html",
        controller: "dashboardController"
      })
      .when("/details",{
        templateUrl: "templates/details.html",
        controller: "detailsController"
      })
      .otherwise({
        redirectTo: "/logInForm"
      })
    }