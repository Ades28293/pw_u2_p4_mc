const app = Vue.createApp({
    
    data() {
        return {
            numero: "",
        }
    },

    methods: {
        obtener(event) {
            this.numero += event.target.innerText;
        },


        operacionCalcular(event) {

            pantalla = event.target.innerText;

            if (pantalla != '=') {
                this.numero += pantalla
            } else {
                resultado = eval(this.numero)
                this.numero = resultado.toString()
            }

        },

        borrar() {
            this.numero = ""
        },
    }


})

app.mount('#myCalculadora')