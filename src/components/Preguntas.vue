<template>
  <form @submit.prevent="agregar_pregunta">
    <div class="jumbotron">
      <!-- aca esta el formulario para las Preguntas, pero solo el login lo ve. -->
      <div v-if="user != null">
        <h1 class="display-4">Mide tu capacidad de preguntar</h1>

        <!-- aca ingresamos la pregunta -->
        <div class="form-group row">
          <label for="exampleFormControlTextarea1">Ingresa una Pregunta</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="nueva_pregunta"
          ></textarea>
        </div>
        <!-- aca ingresamos las respuestas posible  -->
        <div class="row">
          <!-- respuesta correcta aca -->
          <label for="basic-url">Ingresa aca las respuestas posible</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Respuesta True</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              v-model="respuesta_correcta"
            />
          </div>

          <!-- aca vas las respuestas falsas -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Respuesta Falsa</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              v-model="respuesta_falsa1"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Respuesta Fasla</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              v-model="respuesta_falsa2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Respuesta Fasla</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              v-model="respuesta_falsa3"
            />
          </div>
        </div>
        <input type="submit" class="btn btn-primary" />
      </div>
    </div>
  </form>
</template>

<script>
import { db } from "@/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";

export default {
  name: "Preguntas",
  data() {
    return {
      nueva_pregunta: "",
      respuesta_correcta: "",
      respuesta_falsa1: "",
      respuesta_falsa2: "",
      respuesta_falsa3: "",
    };
  },
  methods: {
    agregar_pregunta() {
      const user = firebase.auth().currentUser;

      let respuestas = [
        {
          texto: this.respuesta_correcta,
          es_correcta: true,
        },
        {
          texto: this.respuesta_falsa1,
          es_correcta: false,
        },
        {
          texto: this.respuesta_falsa2,
          es_correcta: false,
        },
        {
          texto: this.respuesta_falsa3,
          es_correcta: false,
        },
      ];

      respuestas = respuestas.sort(() => 0.5 - Math.random());

      //guardar en la nube
      this.$firestore.lista_preguntas
        .add({
          usuario: user.displayName,
          pregunta: this.nueva_pregunta,
          lista_respuestas: respuestas,
        })
        .then(() => {
          // cuando todo está bien
          // aca limpiamos el formulario
          this.nueva_pregunta = "";
          this.respuetas = "";

          // redirigir a la tabla
          router.push("/");
        });
    },
  },

  computed: {
    error() {
      //aca nos traemos el error desde el almacen
      return this.$store.state.error;
    },
    user() {
      return this.$store.state.user;
    },
  },
  firestore() {
    return {
      lista_preguntas: db.collection("lista_preguntas"),
    };
  },
};
</script>


<style scoped>
</style>