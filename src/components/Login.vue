<template>
  <div class="jumbotron card bg-light" id="avatar">
    <div class="col-sm">
      <h1 class="display-4">Preguntas de Ruclutamiento TI</h1>
      <img src="@/assets/logo.jpg" alt width="100px" class="rounded-circle" id="avatar" />
    </div>
    <h2 class="lead">Aca podras conocer sobres preguntas de ruclamiento TI y aportar con tus experiencias</h2>
    <hr class="my-4" />
    <div class="row">
      <!-- aca va el formulario para resistro -->
      <form class="col-sm" @submit.prevent="register">
        <div class="form-group">
          <p>Unete a esta trivia y manten al dia tu conocimiento</p>
          <label>Register Name</label>
          <input type="text" class="form-control" required="required" v-model="register_name" />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" required="required" v-model="register_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
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
        <button type="submit" class="btn btn-primary">Registro</button>
      </form>

      <!-- aca va el formulario para login  -->
      <form class="col-sm" @submit.prevent="login">
        <div class="form-group">
          <p>Por aca si ya Sabes</p>
          <label>Email address</label>
          <input type="email" class="form-control" v-model="login_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="login_password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //aca capturamos al login
      login_email: "",
      login_password: "",
      //  aca capturo el nuevo registro
      register_email: "",
      register_password: "",
      register_password_confirm: "",
      register_name: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.login_email,
        password: this.login_password,
      });
    },
    register() {
      if (this.register_password != this.register_password_confirm) {
        alert("La claves deben ser iguales");
        return;
      }
      // aca hacemos el registro que luego enviamos a main para guardar en Data Firebase
      this.$store.dispatch("register", {
        email: this.register_email,
        password: this.register_password,
        name: this.register_name,
      });
    },
  },
};
</script>
<style scoped>
</style>