import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false //("Você está executando o Vue no modo de desenvolvimento")

let app = ''

// Initialize Firebase criando o projeto Site
/**
 * Adicionar o Firebase ao seu aplicativo da Web
 * SUAS CONFIGURAÇÕES DO FIREBASE
 */  
  var config = {
    apiKey: "AIzaSyAzi95pn60IA8CH3Knw_AUKrwnLWF3c9Vc",
    authDomain: "vue-fireabe-fb.firebaseapp.com",
    databaseURL: "https://vue-fireabe-fb.firebaseio.com",
    projectId: "vue-fireabe-fb",
    storageBucket: "vue-fireabe-fb.appspot.com",
    messagingSenderId: "306576921495"
  };
  firebase.initializeApp(config);

/**
 * Agora, inicializamos o aplicativo somente quando tiver certeza de que o 
 * objeto Firebase Auth está pronto para uso.
 *  */

firebase.auth().onAuthStateChanged(() => {
  
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})


