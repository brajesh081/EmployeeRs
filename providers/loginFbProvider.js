import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

export default function () {
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
  
