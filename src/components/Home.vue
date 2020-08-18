<template>
  <div class="container">
    <!-- barra de navegacion -->
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Horas Medicas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
        <router-link :to="{path:'/login'}">
          <button type="button" class="btn btn-primary">Back</button>
        </router-link>
      </nav>
    </div>
<div>
  <p>

  </p>
</div>

    <div class="row">
      <table class="table col-sm">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hpra</th>
            <th scope="col">Comentario</th>
          </tr>
        </thead>
        <tbody></tbody>
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
};
</script>

<style>
</style>