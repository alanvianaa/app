<template>
    <div class="container col-sm-4" >    
        <div class="align-self-center">
            <div class="card" id="login_id">
            <article class="card-body">
                <a href="/registrar" class="float-right btn btn-outline-primary">Cadastre-se</a>
                <h4 class="card-title mb-3 mt-1">Fazer Login </h4>
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input v-model="email" class="form-control" placeholder="Email ou login" type="email">
                </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input v-model="senha" class="form-control" placeholder="******" type="password">
                </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                <button @click="login" class="btn btn-primary btn-block"> Login  </button>
                </div> <!-- form-group// -->
                <p class="text-center"><a href="#" class="btn">Esqueceu a senha?</a></p>
                <hr>
                <div id="firebaseui-auth-container"></div>
            </article>
            </div> <!-- card.// -->
        </div> 
    </div> 
</template>
<script>
import firebase from 'firebase';
import * as firebaseui from "firebaseui"
import "../../node_modules/firebaseui/dist/firebaseui.css"

export default {
    name: "login",
    data(){
        return{
            email: '',
            senha: ''
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                () => {
                    this.$router.replace('home');
                },
                (error) => {
                    alert('Não foi possivel logar. '+ error.message)
                }
            );
        }
    },
    mounted() {
        let uiConfig = {
            signInOptions: [
              {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              },
              {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: 'BR',
              }
            ],
            callbacks: {
                signInSuccessWithAuthResult() {  
                    window.location.href = '/'
                }
            }
        }
        var ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start("#firebaseui-auth-container", uiConfig)
    }  
};
</script>
<style>

</style>

