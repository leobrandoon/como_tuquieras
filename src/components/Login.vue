<template>
  <div class="jumbotron">
    <h1 class="display-4">Welcome to The Casa Moscas</h1>
    <p class="lead">postea lo que quieras sin muchas normas</p>
    <hr class="my-4" />
    <div class="row">
      <!-- aca va el formulario para resistro -->
      <form class="col-sm">
        <div class="form-group">
          <p>Si aun no eres parte de Casa Moscas, entonces registrate aqui!</p>
          <label>Email address</label>
          <input type="email" class="form-control" required="required" v-model="login_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" required="required" v-model="login_password" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <!-- aca va el formulario para login  -->
      <form class="col-sm">
        <div class="form-group">
          <p>Si ya estas registrado ingresa Aca !</p>
          <label>Email address</label>
          <input type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
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
    };
  },
  methods: {
    login() {
      console.log("llegue");
    },
  },
};
</script>
<style>
</style>