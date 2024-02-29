import React from "react";
import '../Imagenes/Fundadores.jpeg'
import '../Imagenes/Fundadores2.jpeg'
import '../Imagenes/Fundadores3.jpeg'

import '../css/sobre_nosotros_styles.css'

function PSNosotros(){
    return(
      <div className="Pagina_Sobre_Nosotros">
            <div className="Contenido_Pagina">
                <div className="tituloempresa">
                    <h1 className="titulokaluka">KALUKA<span class="titulobeer">BEER</span></h1>
                </div>
                <div className="contenedor_tiempo">
                    <div className="contenedor_historia">
                        <div className="imagenFundadores"> 
                            <img src={require('../Imagenes/Fundadores.jpeg')} alt="Foto de los fundadores" />
                            
                        </div>
                        <div className="contenedor_textoEmpresa">
                            <h2 className="anioHistoria">2021</h2>
                            <p className="textoEmpresa"> Nacidos desde un hobby y disfrute familiar, 
                                comenzamos elaborando 5 litros de cerveza para compartir en familia bajo el nombre de NuNa Beer.</p>
                        </div>
                    </div>
                    <div className="contenedor_historia">
                        <div className="imagenFundadores"> 
                            <img src={require('../Imagenes/Fundadores2.jpeg')} alt="Foto de los fundadores" />
                        </div>
                        <div className="contenedor_textoEmpresa">
                            <h2 className="anioHistoria">2022</h2>
                            <p className="textoEmpresa"> Por cuestines de registro de marca, nos llevo a renacer como Kaluka Beer, una marca que ha ido dejando una huella unica en la industria cervecera.</p>
                        </div>
                    </div>  
                    <div className="contenedor_historia">
                        <div className="imagenFundadores"> 
                            <img src={require('../Imagenes/Fundadores3.jpeg')} alt="Foto de los fundadores" />
                        </div>
                        <div className="contenedor_textoEmpresa">
                            <h2 className="anioHistoria">2023</h2>
                            <p className="textoEmpresa"> Detrás de Kaluka Beer estamos dos mentes apasionadas. Jessenia Basantes, quimica farmacéutica y líder en control de calidad, Cristhian Suárez, encargado de la publicidad y distribución.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PSNosotros;