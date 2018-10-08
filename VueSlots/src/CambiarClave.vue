<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
          <h3>Cambiar Clave</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
              <label for="clave">Contraseña</label>
              <input type="password" class="form-control"
              id="clave" placeholder="Contraseña">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Cambiar Clave</button>
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
