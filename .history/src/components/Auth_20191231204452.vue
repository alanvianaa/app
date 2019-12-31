<template lang="html">
<div>
  {{msg}}
  <div id="firebaseui-auth-container"/>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'


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
