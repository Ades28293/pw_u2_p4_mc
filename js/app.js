console.log("Componente Vue");
console.log(Vue);

const app = Vue.createApp({
  //Option 1 hmtl template
  /*  template:`
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS </p>
    <p>{{1+1}}</p>
    `*/

    //opcion data
  data() {
    return {
        nombre:'Michael',
        apellido:'Cen',
        mensaje:'Hola mundo 2 desde Vue.JS',
    };
  },
  //opcion metodos
  methods:{
    cambiarNombre(){
        console.log('Cambiar nombre')
        //la palabra reservada this para referenciar a esta propiedad 
        //que esta en la misma clase
        this.nombre='Zhong'
    },
    cambiarApellido(){
        console.log('Cambiar apellido')
        this.apellido='Cen'
    }
  }
});
/* identificador el #
se va configurar las opciones o mas conocido option api
Option API es la estructura de mi pagina web (Opciones)
-html
-java script
-css*/
app.mount("#miAplicacion");
