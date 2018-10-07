<template>
    <div class="input-group">
        <input type="text" placeholder="escribe una nueva tarea"
        v-model="nuevatarea"
        class="form-control"
        v-on:keyup.enter="agregartarea">
        <span class="input-group-btn">
            <button type="button"
            v-on:click="agregartarea"
            class="btn btn-primary">
                agregar
            </button>
        </span>
    </div>
</template>

<script>
//importamos el bus para poder transferir datos entre componentes
import {bus} from './main.js'
export default {
    //creo el data para este componente
   data(){
       return {
           nuevatarea:''
       }
   },
   //con props recibo el arreglo tareas desde app.vue
   props:['tareas','incrementarcontador'],
   //creo los metodos necesarios para este componente
   methods:{
       agregartarea(){
           var texto = this.nuevatarea.trim();
           if(texto){
               this.tareas.push({
                   texto:texto,
                   terminada:false
               })
               //this.incrementarcontador();
               //uso el bus para poder mandar el dato del tamaño al componente titulo
               //bus.$emit('aumentarcontador', this.tareas.length);
                bus.aumentarcontador(this.tareas.length);
           }
           this.nuevatarea='';
       }
   },
   created(){
       //cuando carga mando el tamaño del arreglo al componente titulo
       bus.$emit('aumentarcontador', this.tareas.length);
   }
}
</script>