import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Componente({titulo, children}) {
/*function Componente(props) {
  console.log(props);
  //const titulo = props.titulo;
  //const contenido = props.contenido;
  const { titulo, contenido } = props;
  
  <Componente titulo="React" contenido="Hola desde React"></Componente>
  otra manera de hacerlo con mas codigo*/
  return (
    <div>
    <h1>{titulo}</h1>
    <div>{children}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Componente titulo="React">Hola desde React</Componente>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();