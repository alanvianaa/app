<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Sair</button>
    <Auth/>
  </div>
</template>

<script>
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld.vue';
import Auth from '@/components/Auth.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Auth
  },
  methods:{
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
