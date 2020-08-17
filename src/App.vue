<template>
  <div id="app" class="container">
    <button type="button" class="btn btn-primary" v-if="user !=null" @click="logout">Exit</button>

    <div class="alert alert-danger" role="alert" v-if="error !=null">
      <b>{{ error }}</b>
    </div>
    <div class="alert alert-success" role="alert" v-if="user !=null">
      <b>Bienvenido a La Casa de las Moscas {{ user.email}}</b>
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
