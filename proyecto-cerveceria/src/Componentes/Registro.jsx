import React from "react";
import "../css/registro_styles.css";

export default function Registro(){
    return(
        <section className="cuerpo">
            <form className="formulario2" action="">
                <h2> REGISTRO </h2>
                <label htmlFor=""> Nombre </label>
                <input type="text" />
                <label htmlFor=""> Apellido </label>
                <input type="text" />
                <label htmlFor=""> Usuario </label>
                <input type="text" />
                <label htmlFor=""> Contraseña </label>
                <input type="password" />
                <label htmlFor=""> Confirmar Contraseña </label>
                <input type="password" />
                <button className="confirmar"> Confirmar </button>
            </form>
            
        </section>
    );
}   