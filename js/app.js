console.log('Componente Vue')
console.log(Vue)

const app=Vue.createApp({
    //Option 1 hmtl template
    template:`
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS </p>
    `
})
/* identificador el #
se va configurar las opciones o mas conocido option api
Option API es la estructura de mi pagina web (Opciones)
-html
-java script
-css*/
app.mount('#miAplicacion')