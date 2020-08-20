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
            <th scope="col">Name User</th>

            <th scope="col">Paciente</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody v-if="user !=null">
          <tr v-for="citas_medicas in citas_medicas" :key="citas_medicas.id">
            <td>{{citas_medicas.id}}</td>
            <td>{{citas_medicas.paciente}}</td>
            <td>{{citas_medicas.fecha}}</td>
            <td>{{citas_medicas.hora}}</td>
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