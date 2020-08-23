<template>
  <div class="container">
    <div class="jumbotron">
      <div
        class="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="es_ES"
        data-type="vertical"
        data-theme="dark"
        data-vanity="leonargo-gonzalez"
      >
        <a
          class="LI-simple-link"
          href="https://cl.linkedin.com/in/leonargo-gonzalez?trk=profile-badge"
        >Leonardo Gonzalez Jara</a>
      </div>

      <img src="@/assets/logo.jpg" alt width="100px" class="rounded-circle" id="avatar" />
      <h1 class="display-4">Bienvenido a este Atajo</h1>

      <hr class="my-4" />

      <p>Prueba tu conocimiento</p>

      <router-link :to="{path:'/login'}" v-if="user ==null">
        <a class="btn btn-primary btn-lg" href="#" role="button">Login</a>
      </router-link>
      <router-link :to="{path:'/play'}" v-if="user !=null">
        <a class="btn btn-primary btn-lg" href="#" role="button">Trivia Go!</a>
      </router-link>
    </div>
    <h2>Ultimos resultado de la Trivia Ti.</h2>
    <h3>Si quieres ser parte del ranking debes estar registrado</h3>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Score</th>
          <th scope="col">Aciertos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="respuesta_player in respuestas_player" :key="respuesta_player.id">
          <td>{{respuesta_player.usuario}}</td>
          <td>{{respuesta_player.porcentaje}}%</td>
          <td>{{respuesta_player.respuestas_correctas}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "@/firebase";
import firebase from "firebase/app";
import router from "@/router";

export default {
  name: "Home",
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
  firestore() {
    return {
      respuestas_player: db.collection("respuestas_player"),
    };
  },
};
</script>


<style>
</style>