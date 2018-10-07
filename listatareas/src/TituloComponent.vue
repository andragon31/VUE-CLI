<template>
    <div>
        <h2>{{ titulomayusculas() }}</h2>
        <h3>Tareas a hacer:{{numtareas}}</h3>
    </div>
</template>

<script>
//importamos el bus para poder transferir datos entre componentes
import {bus} from './main.js'
export default {
    //se reciben los datos como arreglos cuando no vamos a hacer ningun tipo de validaciones
   props:['titulo'],
   data(){
       return{
           numtareas:0
       }
   },

   //se reciben los datos como objetos cuando queremos validar los datos que se reciben
   /*
   props:{
       titulo:{
           required:true,
           type: String,
           default:'tareas'
       }
   },
   */
   methods:{
       titulomayusculas(){
           return this.titulo.toUpperCase();
       }
   },
   created(){
       //escucho de la variable bus si me estan enviando algun dato respecto al arreglo de tareas
       bus.$on('aumentarcontador',(numtareas)=>{
           this.numtareas = numtareas;
       })
   }
}
</script>

