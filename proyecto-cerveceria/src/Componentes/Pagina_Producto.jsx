import React, { useState} from 'react';
import producto1 from '../Imagenes/Producto_Lata1.jpg';
import producto2 from '../Imagenes/Producto_Lata2.jpg';
import producto3 from '../Imagenes/Producto_Botella1.jpg';

import '../css/productos_styles.css'
import Cervezas from './Componente_Prodcutos';
const data = {
    3: {
        id: 3,
        titulo: 'Rubia',
        precioNormal: '$3,50',
        url1: producto3,
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$3'
    },
    2: {
        id: 2,
        titulo: 'Maracuya',
        precioNormal: '$4',
        url1: producto2,
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$3,50'
    },
    1: {
        id: 1,
        titulo: 'Negra',
        precioNormal: '$3,50',
        url1: producto1,
        url2: '../rss/3 PANTALONETAFRONT.webp',
        precioOferta: '$2,50'
    },
};



const Productos = () => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    // useEffect(() => {
    //     cambiarImagen();
    // }, []);

    const obtenerProducto = (productoId) => {
        setMostrarDetalle(true);
        setProductoSeleccionado(data[productoId]);
    };

    // const cambiarImagen = () => {
    //     Object.values(data).map((producto) => {
    //         // let imagen = document.getElementById(`imagen${producto.id}`);
    //         // imagen.addEventListener("mouseenter", () => {
    //         //     imagen.src = `${producto.url2}`;
    //         // });
    //         // imagen.addEventListener("mouseleave", () => {
    //         //     imagen.src = `${producto.url1}`;
    //         // });
    //         // return () => {
    //         //     imagen.removeEventListener("mouseenter", () => {
    //         //         imagen.src = `${producto.url2}`;
    //         //     });
    //         //     imagen.removeEventListener("mouseleave", () => {
    //         //         imagen.src = `${producto.url1}`;
    //         //     });
    //         // };
    //     });
    // };

    return (
        <div className='cotenedorGeneral'>
            {!mostrarDetalle ? (
                <div id="contenedorProductos">
                    {Object.values(data).map((producto) => (
                        <article className='contenedor_producto'>
                            <button
                            key={producto.id}
                            className="botonProducto"
                            onClick={() => obtenerProducto(producto.id)}
                            >
                            <img className='img' src={producto.url1} alt={producto.titulo} />
                            </button>
                        <Cervezas  nombre_producto={producto.titulo} precio={producto.precioNormal} />
                        </article>
                    ))}
                </div>
            ) : (
                <div id="contenedorUnico">
                    <div className="columna1">
                        <img
                            id={`imagen${productoSeleccionado.id}`}
                            className="imagenProducto"
                            src={productoSeleccionado.url1}
                            alt=""
                        />
                    </div>
                    <div className="columna">
                        <h1>{productoSeleccionado.titulo}</h1>
                        
                        <div className="datosProducto">
                            <span className="tachado">{productoSeleccionado.precioNormal}</span>
                            <span>{productoSeleccionado.precioOferta}<span className="oferta">Oferta</span></span>
                            <p>Producto
                            </p>
                            <div>
                                <button> - </button>
                                <span> </span>
                                <button> + </button>
                                <div>
                                    <button onClick={() => setMostrarDetalle(false)}>Volver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Productos;
