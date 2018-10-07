<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!--aqui envio el dato titulo al archivo TituloComponent.vue-->
      <titulo v-bind:titulo="titulo" 
              v-bind:numtareas="numtareas"></titulo>
      <!--aqui envio el la lista de tareas al archivo NuevaTareaComponent.vue-->
      <nueva-tarea v-bind:tareas="tareas" v-bind:incrementarcontador="incrementarcontador"></nueva-tarea>
      <lista-tareas v-bind:tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
//importo los dos archivos de los componentes que he creado
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'
export default {
  components:{
    //constructor que asigna los dos componentes importados
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  //creo el data global para esta app
  data(){
    return{
      titulo:'Lista de tareas',
      numtareas:3,
      tareas: [
        {
          texto:'Aprende NodeJS',
          terminada: false
        },
        {
          texto:'Aprende VueJS',
          terminada: false
        },
        {
          texto:'Aprende ReactJS',
          terminada: false
        }
      ]
    }
  },
  methods:{
    incrementarcontador()
    {
      this.numtareas++;
    }
  }
}
</script>

<style>

</style>
