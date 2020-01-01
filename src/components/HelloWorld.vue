<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
  <div class="container col-sm-8 ">
    <div class="card align-self-center">
        <h4><b>UID:</b> {{uid}}</h4>
        <h4><b>Nome:</b> {{nome}}</h4>
        <h4><b>E-mail:</b> {{email}}</h4>
        <h4><b>Telefone:</b> {{telefone}}</h4>
    </div>
  </div>
  <br>
  <newName></newName>
  <br>
  <token></token>
  </div>
</template>

<script>
import firebase from 'firebase'
import newName from '@/components/NewName.vue'
import token from '@/components/tokenJWT.vue'
export default {
  name: 'HelloWorld',
  components: {
    newName,
    token
  },
  props: {
    msg: String
  },
  data(){
    var user = firebase.auth().currentUser;
    var fone = user.phoneNumber;
    if(fone == null){
      fone = "Não cadastrado";
    }
    return{
      nome: user.displayName,
      email: user.email,
      telefone: fone,
      uid: user.uid
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
