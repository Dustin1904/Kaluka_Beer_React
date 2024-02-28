import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Encabezado from './Encabezado';
import Productos from './PaginaProducto';
import Ofertas from './Ofertas';
import Iniciosesion from './Login';
import PPrincipal from './PaginaPrincipal';
import PSNosotros from './PaginaSNosotros';
import Registro from './Registro';


function PValidacion(){
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
          <Route path='/PaginaPrincipal' element={<PPrincipal />} />
          <Route path='/PaginaProducto' element={<Productos/>} />
          <Route path='/Ofertas' element={<Ofertas />} />
          <Route path='/PaginaSNosotros' element={<PSNosotros />} />
          <Route path='/Login' element={<Iniciosesion />} />
          <Route path='/Registro' element={<Registro />} />
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
          <form className='form_PValidacion' onSubmit={manejarEnvio} target='_self'>
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
          <img className='imagen1_logo' src={require('../Imagenes/Kaluka_Beer_3.jpg')} alt='xd' />
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
          <img className="imagen2_tiktok" src={require('../Imagenes/Tiktok_logo.png')} alt='xd'/>
        </div>
        <div className="imagen3_instagram_pie_pagina">
          <img className="imagen3_instagram" src={require('../Imagenes/Instagram_logo.png')} alt='xd'/>
        </div>
      </div>

    </div>
      
  ); 
}
export default PValidacion;