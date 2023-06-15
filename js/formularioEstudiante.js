

const arrayEstudiantes = [];

const app = Vue.createApp({
 
    /* en el data van las variables que voys a utilizar*/
    data() {
    return {
      miArreglo: arrayEstudiantes,
      nombre: "",
      apellido: "",
      edad: "",
      ciudad: "",
    }
  },

  methods: {
    agregarEstudiante() {
      const nuevoEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        ciudad: this.ciudad,
      };
      this.miArreglo.push(nuevoEstudiante);
    },
  },
});

app.mount("#miFormulario");
