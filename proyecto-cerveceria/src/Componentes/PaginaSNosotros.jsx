import React from "react";
import Fundadores1 from "../Imagenes/Fundadores.jpeg";
import Fundadores2 from "../Imagenes/Fundadores2.jpeg";
import Fundadores3 from "../Imagenes/Fundadores3.jpeg";
import "../css/sobre_nosotros_styles.css"

function PSNosotros(){
    return(
        <div class="Pagina_Sobre_Nosotros">
            <h1> KALUKA <span>BEER</span> </h1><br />
            <div className="contenedor_historia">
                <div className="contenedor">
                    <img className="fundadores" src={Fundadores1} alt="foto fundadores" />
                    <h2 className="año"> 2023 </h2>
                    <p className="texto_historia"> 
                        Nacidos desde un hobby y disfrute familiar, 
                        comenzamos elaborando 5 litros de cerveza para compartir en familia bajo el nombre de NuNa Beer.
                    </p>
                </div>
                <div className="contenedor">
                    <img className="fundadores" src={Fundadores2} alt="foto fundadores" />
                    <h2 className="año"> 2023 </h2>
                    <p className="texto_historia"> 
                        Detrás de Kaluka Beer estamos dos mentes apasionadas. Jessenia Basantes, quimica farmacéutica y líder en control de calidad, Cristhian Suárez, encargado de la publicidad y distribución.
                    </p>
                </div>
                <div className="contenedor">
                    <img className="fundadores" src={Fundadores3} alt="foto fundadores" />
                    <h2 className="año"> 2023 </h2>
                    <p className="texto_historia"> 
                        Por cuestines de registro de marca, nos llevo a renacer como Kaluka Beer, una marca que ha ido dejando una huella unica en la industria cervecera.
                    </p>
                </div>
            </div>
            
        </div>
    );
}
export default PSNosotros;