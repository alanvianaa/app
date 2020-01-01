<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    -->
    <HelloWorld msg="Entrou no sistema"/>
    <button @click="logout">Sair</button>
    
  </div>
</template>

<script>
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld.vue';


export default {
  name: 'home',
  components: {
    HelloWorld
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
