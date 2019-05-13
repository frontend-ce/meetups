import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase";

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue';
import CreateAccount from '@/views/CreateAccount.vue';


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      component: Login
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },    
    {
      path: '/criar-conta',
      name: 'CreateAccount',
      component: CreateAccount      
    }
  ]
})


/**
 * A função beforeEach aceita três parâmetros, to, from e next e será chamada 
 * sempre que uma navegação for acionada.
 * para o parâmetro é o objeto de rota de destino que está sendo navegado do parâmetro 
 * é a rota atual sendo navegada para longe.
 * O próximo parâmetro é uma função que deve ser chamada para resolver o gancho e pode 
 * receber argumentos para redirecionar ou anular a navegação (veja mais na documentação)
 * Na função beforeEach, recuperamos o currentUser do Firebase e verificamos se a rota pela 
 * qual desejamos navegar precisa de autenticação, verificando se o objeto route tem a meta requiresAuth.
 */

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth )

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();

});

export default router;