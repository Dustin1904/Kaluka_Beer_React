import React from "react";
import {  Link } from "react-router-dom";

import "../App.css";
import "../css/iniciar_sesion_styles.css";

function Encabezado(){
    return(
      <div className="contenedor-general">
        <div className="Pagina_Principal">
          <div className="Contenedor_Acciones_Menu">
            <div className="Logo_Kaluka">
              <img className="imagen_logo_pantallas " src={require("../Imagenes/Kaluka_Beer_3.jpg")} alt="xd" />
            </div>
            <div className="contenedor_opciones">
              <nav className="navegacion text-9xl">
                <li className="text-9xl"><Link to="/paginaprincipal"> Inicio </Link></li>
                <li><Link to="/paginaproducto"> Productos </Link></li>
                <li><Link to="/ofertas"> Ofertas </Link></li>
                <li><Link to="/paginasnosotros"> Sobre Nosotros </Link></li>
                <li><Link to="/login"> Iniciar Sesion </Link></li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Encabezado;