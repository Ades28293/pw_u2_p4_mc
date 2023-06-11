const rootElement=document.getElementById('root')
const element=React.createElement('div',{
    className:'container'
},
'Hola Mundo');

ReactDOM.render(element,rootElement);