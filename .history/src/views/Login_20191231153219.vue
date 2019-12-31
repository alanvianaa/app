<template>
<div class="container col-sm-3" >
<div class="align-self-center">
    <div class="card" id="login_id">
    <article class="card-body">
        <a href="/registrar" class="float-right btn btn-outline-primary">Sign up</a>
        <h4 class="card-title mb-4 mt-1">Login </h4>
        <p>
            <a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i> Login via Twitter</a>
            <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i> Login via facebook</a>
            <a @click="login" href="" class="btn btn-block btn-outline-danger"> <i class="fab fa-google"></i> Login via Google</a>
        </p>
        <hr>
        
        <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model="email" class="form-control" placeholder="Email or login" type="email">
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
        
    </article>
    </div> <!-- card.// -->
	
</div> 
</div> 
</template>
<script>
import firebase from 'firebase';

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
                (user) => {
                    this.$router.replace('home');
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

</style>

