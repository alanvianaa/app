<template lang="html">
<div>
  {{msg}}
  <div id="firebaseui-auth-container"/>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'

var firebaseConfig = {
  apiKey: "AIzaSyDgwGk9MWvHGSzYTEQmjv1m8HVromHF07E",
  authDomain: "fazenda-api.firebaseapp.com",
  databaseURL: "https://fazenda-api.firebaseio.com",
  projectId: "fazenda-api",
  storageBucket: "fazenda-api.appspot.com",
  messagingSenderId: "359112140889",
  appId: "1:359112140889:web:efccea9e63a334017c6948",
  measurementId: "G-WGR1H2NPZJ"
};

var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export default {
   name: "auth",
    data(){
        return{
          msg: "-- outros --",

        };
    },
    mounted() {
      ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>
