<template>
  <div class="createAccount">
    <h1> Criar um novo contato !</h1>
    <input type="text" name="email"  v-model="email" placeholder="Email"><br>
    <input type="password" name="password" v-model="password" placeholder="Senha"><br>
    <br>
    <button @click="createAccount" >Inscreva-se</button>

    <router-link to="/login"> <p>Voltar</p> </router-link>
    
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: 'createAccount',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      createAccount: function () {

        /**
         * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
         */
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }

          //console.log(error)
        });
      }
     
    }
  }
  
</script>

<style>
</style>
