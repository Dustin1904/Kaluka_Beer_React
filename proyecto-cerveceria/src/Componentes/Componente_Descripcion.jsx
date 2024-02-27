import React,{useState} from "react";

import '../css/productos_styles.css';
export default function Descripcion(){
    const [cantidad, setCantidad] = useState(0);

  const handleIncrement = () => {
    if (cantidad<100){
        setCantidad(cantidad + 1);
    }
    
  };

  const handleDecrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  return(
    <div className="botones">
        <button className="boton_cantidad boton_resta" onClick={handleDecrement}> - </button>
        <span className="numero_cantidad">{cantidad}</span>
        <button className="boton_cantidad boton_suma" onClick={handleIncrement}> + </button>
    </div>
  );
}