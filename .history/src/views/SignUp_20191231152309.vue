<template>
    <div class="sign-ip">
        <br>
        <input v-model="email" type="text" placeholder="Email">
        <br>
        <br>
        <input v-model="senha" type="password" placeholder="Senha">
        <br>
        <br>
        <button @click="signUp" >Registrar</button>
        <span>
            ou retornar ao 
            <router-link to="/login">login.</router-link>
        </span>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'signUp',
    data(){
        return{
            email: '',
            senha: '',
        };
    },
    methods: {
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    alert("Olá "+user)
                    this.$router.replace('home')
                },
                (error) => {
                    alert('Algo deu errrado'+error.message)
                }
            );
        },
    },
};
</script>