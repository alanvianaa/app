<template>
  <div class="container col-sm-3 ">
    <div class="card align-self-center">
         <h4><b>Nome:</b> {{newName}}</h4>
        <input v-model="newName" type="text">
        <button @click="inserir" >Alterar nome</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'newName',
    data(){
        return{
            newName: firebase.auth().currentUser.displayName,
        };
    },
    methods: {
        inserir(){
            var user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: this.newName
            }).then(function() {
            // Update successful.
            }).catch(function(error) {
            alert("Erro: "+error)
            });
        }
    }
}
</script>

<style>

</style>