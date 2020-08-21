<template>
  <form @submit.prevent="registro_medico">
    <div class="jumbotron">
      <!-- aca esta el formulario para las horas, pero solo el login lo ve. -->
      <div id="tomadehora" v-if="user != null">
        <h1 class="display-4">Agenda tu hora</h1>

        <!-- aca va el nombre del pacientes -->
        <div class="row">
          <!-- <div class="form-group col-sm">
            <label>Nombre y apellido</label>
            <input
              type="name"
              class="form-control"
              required
              aria-describedby="emailHelp"
              v-model="paciente"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >ingrsa el nombre y apellido del paciente.</small>
          </div>-->
          <div class="col-sm">
            <p>Selecciona una fecha y hora</p>
            <div class="col-sm">
              <input type="date" required v-model="registro_fecha" />
              <small class="form-text text-muted">Fecha</small>
            </div>
            <div class="col-sm">
              <input type="time" required v-model="registro_hora" />
              <small class="form-text text-muted">Hora</small>
            </div>
          </div>
        </div>

        <div class="col-sm"></div>
        <hr class="my-4" />
        <!-- aca ingresamos la razon de la visita -->
        <div class="form-group row">
          <label for="exampleFormControlTextarea1">Razon por la que nos visita</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="registro_sintomas"
          ></textarea>
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
  name: "Horas",
  data() {
    return {
      paciente: "",
      registro_hora: "",
      registro_fecha: "",
      registro_sintomas: "",
    };
  },
  methods: {
    registro_medico() {
      const user = firebase.auth().currentUser;
      //guardar en la nube
      this.$firestore.citas_medicas
        .add({
          paciente: user.displayName,
          hora: this.registro_hora,
          fecha: this.registro_fecha,
          sintomas: this.registro_sintomas,
        })
        .then(() => {
          // cuando todo está bien
          // aca limpiamos el formulario
          this.paciente = "";
          this.registro_hora = "";
          this.registro_fecha = "";
          this.registro_sintomas = "";

          // rediri a la tabla
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
      citas_medicas: db.collection("citas_medicas"),
    };
  },
};
</script>


<style scoped>
</style>