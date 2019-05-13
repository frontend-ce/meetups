<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <button @click="logout">Sair</button>
  </div>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  methods: {
    logout: function () {
      /**
       * Para fazer o logout, vamos apenas adicionar um botão em nosso 
       * componente inicial e anexar um evento para sair do Firebase.
       */
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
