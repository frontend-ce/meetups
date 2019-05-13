<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" v-model="email" name="email" placeholder="Email"><br>
    <input type="password" v-model="password" name="password" placeholder="Senha"><br>
    <br>
    <button @click="login">Logar</button>

    <router-link to="/criar-conta"> <p> Criar conta.</p> </router-link>
    
  </div>
</template>

<script>
  //@click eventos

  /**
   * v-model
   * Você pode usar a diretiva v-model para criar interligações de mão dupla 
   * (two-way binding) entre os dados e elementos input, textarea e select de 
   * formulários. A diretiva automaticamente busca a maneira correta de atualizar 
   * o elemento com base no tipo de entrada. Embora um pouco mágico, v-model é 
   * essencialmente açúcar sintático para atualização de dados através de eventos 
   * de entrada do usuário, além de cuidados especiais para alguns casos extremos.
   */



  /**
   * <router-link>
   * é o componente para permitir a navegação do usuário em um aplicativo 
   * habilitado para roteador. O local de destino é especificado com o toprop. 
   * Ele é renderizado como uma <a>tag com o valor correto hrefpor padrão, mas 
   * pode ser configurado com o tagprop. Além disso, o link recebe automaticamente 
   * uma classe CSS ativa quando a rota de destino está ativa.
   *  */ 

  import firebase from "firebase";
  
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      
      login: function () {

         /**
         * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
         */

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
            this.$router.replace('home')
         
        ).catch();
        
      }
    }
    
  }
  
</script>

<style>
</style>
