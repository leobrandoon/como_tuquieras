<template>
  <div class="jumbotron card bg-dark text-white" id="avatar">
    <div class="col">
      <img src="@/assets/Mosca.png" alt width="100px" class id="avatar" />
      <img src="@/assets/fondo.jpg" alt width="200px" class="rounded-circle" id="avatar" />
      <h1 class="display-4">La Casa de las Moscas</h1>
    </div>
    <h2 class="lead">Onli Post de mierda</h2>
    <hr class="my-4" />
    <div class="row">
      <!-- aca va el formulario para resistro -->
      <form class="col-sm" @submit.prevent="register">
        <div class="form-group">
          <p>Unete a otra red de mierda</p>
          <label>Email address</label>
          <input type="email" class="form-control" required="required" v-model="register_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            id="alertapass"
            type="password"
            class="form-control"
            required="required"
            v-model="register_password"
          />
        </div>
        <div class="form-group">
          <label>Confirm your Password</label>
          <input
            type="password"
            class="form-control"
            required="required"
            v-model="register_password_confirm"
          />
        </div>
        <button type="submit" class="btn btn-primary">Mosqueate!</button>
      </form>

      <!-- aca va el formulario para login  -->
      <form class="col-sm" @submit.prevent="login">
        <div class="form-group">
          <p>Solo los que saben entran por aca.</p>
          <label>Email address</label>
          <input type="email" class="form-control" v-model="login_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="login_password" />
        </div>
        <button type="submit" class="btn btn-primary">Entra al Vio!</button>
      </form>
    </div>
  </div>
</template>

<script>
// import { db } from "@/firebase";
export default {
  name: "Login",
  data() {
    return {
      login_email: "",
      login_password: "",

      register_email: "",
      register_password: "",
      register_password_confirm: "",
    };
  },
  methods: {
    login() {
      console.log("llegue");
    },
    register() {
      const alertapass = document.getElementByid("alertapass");
      if (this.register_password != this.register_password_confirm) {
        alertapass.setCustomValidity("se te mosquio la pass");
        return;
      }
      // aca hacemos el registro
    },
  },
};
</script>
<style scoped>
</style>