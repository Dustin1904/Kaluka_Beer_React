import React from "react";
import Encabezado from "./Encabezado";
import ReactDOM from 'react-dom';


function P_Principal(){
    return(
      <div className="contenido_pagina">

        <img className="imagen_fondo_Pprincipal" src={require('../Imagenes/GI.jpg')} />
      </div>
    );
}

export default P_Principal;
