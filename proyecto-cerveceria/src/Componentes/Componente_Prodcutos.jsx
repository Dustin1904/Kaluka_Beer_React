import React,{useState} from "react";

import '../css/productos_styles.css';
export default function Cervezas(props){
    const [cantidad, setCantidad] = useState(0);

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
    return(
        <div className="detalles_producto">
            <h3 className="nombre_producto">{props.nombre_producto}</h3>
            <span className="precio_producto">{props.precio}</span>
            <div className="botones">
                <button className="boton_cantidad boton_resta" onClick={handleDecrement}> - </button>
                <span className="numero_cantidad">{cantidad}</span>
                <button className="boton_cantidad boton_suma" onClick={handleIncrement}> + </button>
            </div>
            <button> Agregar </button>
        </div>
    );
}