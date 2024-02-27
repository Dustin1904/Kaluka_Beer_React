import React from "react";
import Descripcion from "./Componente_Descripcion";

import '../css/productos_styles.css';
export default function Cervezas(props){
    return(
        <div className="detalles_producto">
            <h3 className="nombre_producto">{props.nombre_producto}</h3>
            <span className="precio_producto">{props.precio}</span>
            <Descripcion />
            <button> Agregar </button>
        </div>
    );
}