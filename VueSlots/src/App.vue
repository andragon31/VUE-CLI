<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary"
      v-on:click="componenteSeleccionado='iniciarSesion'">Iniciar Sesion</button>
      <button class="btn btn-primary"
      v-on:click="componenteSeleccionado='cambiarClave'">CambiarClave</button>
      <keep-alive>
        <component v-bind:is="componenteSeleccionado"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue'
import IniciarSesion from './IniciarSesion.vue'
import CambiarClave from './CambiarClave.vue'
export default 
{
  components:
  {
    mostrarFormulario: MostrarFormulario,
    iniciarSesion:IniciarSesion,
    cambiarClave: CambiarClave
  },
  data() 
  {
    return{
      componenteSeleccionado: 'iniciarSesion'
    }

  }
}
</script>

<style scoped>
  
</style>
