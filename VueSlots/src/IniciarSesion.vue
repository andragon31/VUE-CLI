<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Iniciar Sesion</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo">Correo Electronico</label>
            <input type="email" class="form-control"
            id="correo" placeholder="Correo electronico">
          </div>
          <div class="form-group">
              <label for="clave">Contraseña</label>
              <input type="password" class="form-control"
              id="clave" placeholder="Contraseña">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Iniciar Sesion</button>
        </div>
      </mostrarFormulario>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue'
export default 
{
  components:
  {
    mostrarFormulario: MostrarFormulario
  },
  data() 
  {

  }
}
</script>

<style scoped>
  
</style>
