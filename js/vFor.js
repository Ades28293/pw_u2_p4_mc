const persona1 = {
  nombre: "Michael",
  apellido: "Cen",
};

const arrayPersonas = [
  {nombre: "Michael1",apellido: "Cen1",},
  {nombre: "Michael2",apellido: "Cen2",},
  {nombre: "Michael3",apellido: "Cen3",},
  {nombre: "Michael4",apellido: "Cen4",},
  {nombre: "Michael5",apellido: "Cen5",},
  {nombre: "Michael6",apellido: "Cen6",},
  {nombre: "Michael7",apellido: "Cen7",},
  {nombre: "Michael8",apellido: "Cen8",},
  {nombre: "Michael9",apellido: "Cen9",},
  {nombre: "Michael10",apellido: "Cen10",},
];

console.log(arrayPersonas);


const app = Vue.createApp({

    data(){
        return {
            miArreglo:arrayPersonas,
            nombre:'Zhong'
        };
      },

      methods:{
        agregarEstudiante(event){
            console.log('Vamos agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if(event.charCode=='13'){
                console.log('preciono enter')
                const nuevoEstudiante={
                    nombre:this.nombre,
                    apellido:'Nuevo Apellido',
                }

                this.miArreglo.unshift(nuevoEstudiante)
            }else{
                console.log('No es enter')
            }
        },
        agregarEstudiante2(){
            console.log('Vamos agregar')
             const nuevoEstudiante={
                 nombre:this.nombre,
                 apellido:'Nuevo Apellido',
             }

             this.miArreglo.unshift(nuevoEstudiante)
        }

      }
});
console.log("Componente Vue");
console.log(Vue);


/* identificador el #
se va configurar las opciones o mas conocido option api
Option API es la estructura de mi pagina web (Opciones)
-html
-java script
-css*/
app.mount("#miAplicacion2");

/*Funcion para desestructurar 

function insertarEstudiante(estudiante){

}

function insertarEstudiante({nombre,apellido}){

}
*/
