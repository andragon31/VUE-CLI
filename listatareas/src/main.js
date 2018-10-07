import Vue from 'vue'
import App from './App.vue'

//variable para poder transferir datos de un componente a otro
export var bus = new Vue({
  methods:{
    aumentarcontador(numtareas){
      this.$emit('aumentarcontador', numtareas);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
