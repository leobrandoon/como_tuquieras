<template>
  <div id="app" class="container">
    <!-- barra de navegacion general. -->

    <nav class="navbar navbar-dark bg-dark col-sm">
      <a class="navbar-brand" href="#">Horas Medicas</a>

      <!-- condiciones de router  -->
      <div class="form-inline">
        <router-link :to="{path:'/login'}">
          <button type="button" class="btn btn-primary" v-if="user !=null" @click="logout">Exit</button>
          <button type="button" class="btn btn-primary" @click="logout">Login</button>
        </router-link>
      </div>
    </nav>

    <!--panel del registrado-->
    <div class="alert alert-success" role="alert" v-if="user !=null">
      <b>Bienvenido a tus horas medicas {{ user.name}}</b>
    </div>

    <div class="alert alert-danger" role="alert" v-if="error !=null">
      <b>{{ error }}</b>
    </div>
    <router-view />

    <!-- este boton no funciona  -->

    <div>
      <router-link :to="{path:'/horas'}" class="btn btn-primary" v-if="user !=null">Agenda Hora</router-link>
    </div>
  </div>

  <!-- mensaje de login -->
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
