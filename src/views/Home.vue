<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    -->
    <button @click="logout">Sair</button>
    <HelloWorld msg="Entrou no sistema"/>
    
    
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
