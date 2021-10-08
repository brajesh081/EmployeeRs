
export default function ($routeProvider) {

  $routeProvider
  .when("/logInForm" , {
    templateUrl: "templates/logInForm.html",
    controller: "logInController",
    resolve :  {
      lazyLoadCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
            return $ocLazyLoad.load('loginCtrl')    
      }]
    }
  })
  .when("/signUpForm" , {
    templateUrl: "templates/signUpForm.html",
    controller: "signUpController",
    resolve :  {
      lazyLoadCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
            return $ocLazyLoad.load('signupCtrl')    
      }]
    }
  })
  .when("/dashboard" , {
    templateUrl: "templates/dashboard.html",
    controller: "dashboardController",
    resolve :  {
      lazyLoadCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
            return $ocLazyLoad.load('dashboardCtrl')    
      }]
    }
  })
  .when("/details" , {
    templateUrl: "templates/details.html",
    controller: "detailsController",
    resolve :  {
      lazyLoadCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
            return $ocLazyLoad.load('detailsCtrl')    
      }]
    }
  })
  .when("/date" , {
    templateUrl : "templates/dateTimeTemplate.html",
    controller: "dateController",
    resolve:{
      lazyLoadCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load('dateCtrl')    
  }]
    }
  })
  .otherwise({
    redirectTo: "/logInForm"
  })
  
}

/*export default function ($routeProvider){
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
    }*/