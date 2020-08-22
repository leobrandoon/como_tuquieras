<template>
  <div>
    <div class="jumbotron">
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

    <div v-if="user !=null">
      <form @submit.prevent="jugar">
        <h2>Responde la trivia</h2>
        <!-- aca traemos las peguntas ingresadas -->
        <div
          class="row"
          v-for="(lista_pregunta,j) in random_preguntas.slice(0, 3)"
          :key="lista_pregunta.id"
        >
          <div class="card-body">
            <div class="card-header">Pregunta de {{lista_pregunta.usuario}}</div>
            <div class="card-body">
              <p class="card-text">{{lista_pregunta.pregunta}}</p>
            </div>
            <!-- aca traemos las respuesta de cada pregunta -->
            <div
              class="form-check"
              v-for="(respuesta ,i) in lista_pregunta.lista_respuestas"
              :key="i"
            >
              <input
                type="radio"
                :name="lista_pregunta.id"
                :value="respuesta.es_correcta"
                class="form-check-input"
                v-model="respPregunta.answers[j]"
              />
              <label class="form-check-label">{{respuesta.texto}}</label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">play</button>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";

export default {
  name: "Play",
  data() {
    return {
      respPregunta: {
        answers: [],
      },
    };
  },

  methods: {
    jugar(ev) {
      ev.preventDefault();
      console.log(this.respPregunta.answers);
      const user = firebase.auth().currentUser;
      let answer_correctas = 0;
      if (this.respPregunta.answers[0]) {
        answer_correctas++;
      }
      if (this.respPregunta.answers[1]) {
        answer_correctas++;
      }
      if (this.respPregunta.answers[2]) {
        answer_correctas++;
      }
      this.porcent = Math.round((answer_correctas / 3) * 100, -2);

      //guardar en la nube
      this.$firestore.respuestas_player.add({
        usuario: user.displayName,
        respuestas_correctas: answer_correctas,
        porcentaje: this.porcent,
      });

      // redirigir a la tabla
      router.push("/");
    },
  },

  firestore() {
    return {
      lista_preguntas: db.collection("lista_preguntas"),
      respuestas_player: db.collection("respuestas_player"),
    };
  },
  computed: {
    random_preguntas() {
      let preguntas = [...this.lista_preguntas];
      preguntas.sort(() => 0.5 - Math.random());
      return preguntas;
    },

    error() {
      //aca nos traemos el error desde el almacen
      return this.$store.state.error;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
</style>