import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function encabezado(){
    return(
      <div className="contenedor-general">
        <div className="Pagina_Principal">
          <div className="Contenedor_Acciones_Menu">
            <div className="Logo_Kaluka">
              <img className="imagen_logo_pantallas " src={require("../Imagenes/Kaluka_Beer_3.jpg")} />
            </div>
            <div className="contenedor_opciones">
              <nav className="navegacion text-9xl">
                <li className="text-9xl"><Link to="/pagina_principal"> Inicio </Link></li>
                <li><Link to="/pagina_producto"> Productos </Link></li>
                <li><Link to="/ofertas"> Ofertas </Link></li>
                <li><Link to="/pagina_snosotros"> Sobre Nosotros </Link></li>
                <li><Link to=""> Iniciar Sesion </Link></li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
}
export default encabezado;