<template>
  <div class="container col-sm-5 ">
    <div class="card align-self-center">
         <h4>JWT Aqui: {{token}}</h4>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken';
import firebase from 'firebase';

export default {
    name: 'jwt',

    data(){
        return{
            token: ''
        };
    },
    methods: {
        
    },
    mounted(){
        let payload = {
            "uid": firebase.auth().currentUser.uid,
            "name": firebase.auth().currentUser.displayName,
            "iat": 1516239022
        };        
        var token = jwt.sign(payload, 'secret');

        this.token = token;
    }
}
</script>

<style>

</style>