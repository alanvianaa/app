<template lang="html">
<div>
  {{msg}}
  <div id="firebaseui-auth-container"/>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'

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
