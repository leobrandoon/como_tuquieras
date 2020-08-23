<template>
  <div id="app" class="container">
    <!-- barra de navegacion general. -->
    <nav class="navbar navbar-dark bg-dark col-sm">
      <a class="navbar-brand" href="#">Atajo</a>
    </nav>
    <!-- condiciones de router  -->
    <ul class="nav justify-content-center">
      <router-link :to="{path:'/'}">
        <li class="nav-item">
          <a class="nav-link" @click="logout">Home</a>
        </li>
      </router-link>
      <router-link :to="{path:'/login'}">
        <li class="nav-item">
           <a class="nav-link">Login</a>
        </li>
      </router-link>
      <router-link :to="{path:'/login'}" v-if="user !=null">
        <li class="nav-item">
          <a class="nav-link" @click="logout">log out</a>
        </li>
      </router-link>
      <router-link :to="{path:'/preguntas'}" v-if="user !=null">
        <li class="nav-item">
          <a class="nav-link">Add Preguntas</a>
        </li>
      </router-link>
      <router-link :to="{path:'/play'}" v-if="user !=null">
        <li class="nav-item">
          <a class="nav-link">Triva go!</a>
        </li>
      </router-link>
    </ul>

    <!--panel del registrado-->
    <div class="alert alert-success" role="alert" v-if="user !=null">
      <b>Bienvenido a tus trivia {{ user.name}}</b>
    </div>
    <!-- bienvenida del usurario -->

    <div class="alert alert-danger" role="alert" v-if="error !=null">
      <b>{{ error }}</b>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import router from "./router";

export default {
  name: "App",
  computed: {
    error() {
      //aca nos traemos el error desde el almacen
      return this.$store.state.error;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$store.commit("set_user", null);
      this.$store.commit("set_error", null);
      router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
