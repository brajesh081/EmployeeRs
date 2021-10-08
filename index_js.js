// import dashboardController from "./controllers/dashboard.controller.js";
// import detailsController from "./controllers/details.controller.js";
// import loginController from "./controllers/login.controller.js";
// import signupController from "./controllers/signup.controller.js";
import routeConfig from "./routeConfig.js";
import loginFbProvider from "./providers/loginFbProvider.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// import {
//   getAuth,
//   FacebookAuthProvider,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*
const firebaseConfig = {
  apiKey: "AIzaSyD7S6Mry4BaoAuHQpVKAeW6PVX2lRHpgpQ",
  authDomain: "employeers-71348.firebaseapp.com",
  projectId: "employeers-71348",
  storageBucket: "employeers-71348.appspot.com",
  messagingSenderId: "1067212649366",
  appId: "1:1067212649366:web:010a91b9162f5d57a123b7",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new FacebookAuthProvider();
// provider.addScope('user_birthday');
provider.setCustomParameters({
  display: "popup",
});
*/
var app = angular
  .module("logInApp", ["ngRoute","oc.lazyLoad"])
  .run(function ($rootScope, $window) {
    $rootScope.user;
    $rootScope.loggedInUser = false;
    $rootScope.dateSelected = false;
  })
  .config(function ($ocLazyLoadProvider){
    $ocLazyLoadProvider.config({
      'modules':[{
        name : "loginCtrl",
        files: ['controllers/login.controller.js']
      },
      {
        name : "signupCtrl",
        files: ['controllers/signup.controller.js']
      },
      {
        name : "detailsCtrl",
        files: ['controllers/details.controller.js']
      },
      {
        name : "dashboardCtrl",
        files: ['controllers/dashboard.controller.js']
      },
      {
        name: "dateCtrl",
        files: ['controllers/date.controller.js']
      }
    ]
  })
})

.config(routeConfig)
//  .config(routeConfig)
//   .controller("logInController", loginController)
//   .controller("signUpController", signupController)
//   .controller("dashboardController", dashboardController)
//   .controller("detailsController", detailsController)
/*
  .provider("loginProvider" ,function () {
    this.$get = function ($http, $rootScope) {
      return {
        facebookSignIn: function () {
          return signInWithPopup(auth, provider)
            .then((result) => {
              // The signed-in user info.
              const user = result.user;
              $rootScope.user = user;
              // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              const credential =
                FacebookAuthProvider.credentialFromResult(result);
              const accessToken = credential.accessToken;
              console.log(result);
              return user;
              // ...
            })
            .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential =
                FacebookAuthProvider.credentialFromError(error);
              return error
              // ...
            });
        },
      };
    };
  }

)*/

.provider("loginProvider" ,loginFbProvider )

.component("dateComponent" , {
  templateUrl : "./templates/dateTemplate.html",
  controller : "dateController"
})
.component("timeComponent" , {
  templateUrl : "./templates/timeTemplate.html",
  controller : "dateController"
})