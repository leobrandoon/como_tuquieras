import Vue from 'vue'
import Vuex from 'vuex'

// para la autentificacion 
import firebase from 'firebase/app';
import 'firebase/auth'
import VueFirestore from 'vue-firestore';
import './firebase.js'

import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFirestore, { key: 'id' });

const store = new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    set_user(state, new_user) {
      state.user = new_user;
    },
    set_error(state, new_error) {
      state.error = new_error;
    }
  },
  actions: {
    //aca capturamos los registros en este caso register desde Login
    register(context, datos) {
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
        .then(function (response) {
          // si todo ocurre o
          console.log(response)
          context.commit('set_user', { email: datos.email })
          context.commit('set_error', null)
          //aca redirigimos luego de validar los datos deregistro
          router.push('/')

        })
        .catch(function (error) {
          context.commit('set_user', null)
          context.commit('set_error', error.message)

        })
    },

    login(context, datos) {
      firebase.auth().signInWithEmailAndPassword(datos.email, datos.password)
        .then(function (response) {
          // si todo ocurre o
          console.log(response)
          context.commit('set_user', { email: datos.email })
          context.commit('set_error', null)
          //aca redirigimos luego de validar los datos deregistro
          router.push('/')
        })
        .catch(function (error) {
          context.commit('set_user', null)
          context.commit('set_error', error.message)

        })
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
