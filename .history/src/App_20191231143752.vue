<template>
  <div id="app">
    <div id="nav">
      <div>Olá {{email}}</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: "login",
    usuario: firebase.auth().currentUser,
    data(){
        return{
            email: usuario.email
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.replace('/');
                    alert('Logado com '+user);
                },
                (error) => {
                    alert('Não foi possivel logar. '+ error.message)
                }
            );
        }
    }    
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
