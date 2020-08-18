<template>
  <form class="container" @submit.prevent="registro_medico">
    <div class="row">
      <div class="col-sm">
        <h3>Toma de Hora Medica</h3>
        <p>Selecciona una fecha</p>

        <input type="date" required v-model="registro_fecha" />

        <input type="time" required v-model="registro_hora" />
      </div>
    </div>
    <div class="form-group row">
      <label for="exampleFormControlTextarea1">Razon por la que nos visita</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="registro_sintomas"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Agendar</button>
  </form>
</template>

<script>
export default {
  name: "Horas",
  data() {
    return {
      registro_hora: "",
      registro_fecha: "",
      registro_sintomas: "",
    };
  },
  methods: {
    registro_medico() {
      console.log(this.$firestore);
      //guardar en la nube
      this.$firestore.citas_medicas.add({
        hora: this.registro_hora,
        fecha: this.registro_fecha,
        sintomas: this.registro_sintomas,
      });

      // rediri a la tabla
    },
  },
};
</script>


<style scoped>
</style>