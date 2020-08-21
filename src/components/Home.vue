<template>
  <div class="container">
    <!-- barra de navegacion -->

    <div>
      <p></p>
    </div>

    <div class="row">
      <table class="table col-sm">
        <thead>
          <tr>
            <!-- <th scope="col">Name User</th> -->

            <th scope="col">Paciente</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">sintomas</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody v-if="user !=null">
          <tr v-for="cita_medica in citas_medicas" :key="cita_medica.id">
            <td>{{cita_medica.paciente}}</td>
            <!-- <td>{{citas_medicas.paciente}}</td> -->
            <td>{{cita_medica.fecha}}</td>
            <td>{{cita_medica.hora}}</td>
            <td>{{cita_medica.sintomas}}</td>
            <td>edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Home",
  firestore() {
    return {
      citas_medicas: db.collection("citas_medicas"),
    };
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
};
</script>

<style>
</style>