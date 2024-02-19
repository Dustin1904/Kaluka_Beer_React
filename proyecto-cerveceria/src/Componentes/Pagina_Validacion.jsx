import React, { useState } from 'react';
import Pagina_Principal from './Pagina_Principal';
import Redirect from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import P_Productos from "./Pagina_Productos";
import Encabezado from './Encabezado';
import P_Principal from './Pagina_Principal';
import P_Ofertas from './Pagina_Ofertas';
import P_SNosotros from './Pagina_SNosotros';

function P_Validacion(){
  const [redigir, setRedirigir] = useState(false);
  const manejarEnvio=()=>{
    setRedirigir(true);
  }
  if(redigir){
    return(
      <BrowserRouter>
        <div className='contenedor_pagina'>
          <Encabezado />
        </div>
        <Routes>
          <Route path='/Pagina_Principal' element={<P_Principal />} />
          <Route path='/Pagina_Productos' element={<P_Productos />} />
          <Route path='/Pagina_Ofertas' element={<P_Ofertas />} />
          <Route path='/Pagina_SNosotros' element={<P_SNosotros />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return(
    <div className='Validacion_Edad'>
      <div className='Nombre_Empresa'>
        <h1 className='KalukA'> KalukA </h1><br></br>
        <h2 className='BEER'> BEER </h2><br></br>
      </div>

      <div className="Contenedor_Acciones"> 
        <div className='fecha_nacimiento'>
          <form onSubmit={manejarEnvio} target='_self'>
            <input className="dia" type="number" id="dia" min="1" max="31" placeholder="Día" required></input>
            <input className="mes" type="number" id="mes" min="1" max="12" placeholder="Mes" required></input>
            <input className="año" type="number" id="año" min="1950" max="2024" placeholder="Año" required></input>
            <p className="texto_ingreso"> Ingrese su fecha de nacimiento para poder ingresar</p>
            <input className="ingresar" type="submit" value="Ingresar"></input>
          </form>
        </div>
      </div>

      <div className='Pie_Pagina_Validacion'>
        <div className='imagen1_pie_pagina'>
          <img className='imagen1_logo' src={require('../Imagenes/Kaluka_Beer_3.jpg')} />
        </div>

        <div className="texto1_pie_pagina">
          <p className="texto_menores_edad"> Venta prohibida a menores de 18 años </p>
        </div>

        <div className="texto2_pie_pagina">
          <p className="texto_advertencia"> Advertencia: El consumo excesivo de alcohol 
            limita su capacidad de conducir y operar maquinarias, puede causar 
            daños en su salud y perjudica a su familia. Ministerio de Salud Pública
            del Ecuador. 
          </p>
        </div>

        <div class="imagen2_tiktok_pie_pagina">
          <img className="imagen2_tiktok" src={require('../Imagenes/Tiktok_logo.png')} />
        </div>
        <div className="imagen3_instagram_pie_pagina">
          <img className="imagen3_instagram" src={require('../Imagenes/Instagram_logo.png')} />
        </div>
      </div>

    </div>
      
  ); 
}
export default P_Validacion;