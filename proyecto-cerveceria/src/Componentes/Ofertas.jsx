import React, { useState, useEffect } from 'react';
import producto1 from '../Imagenes/Producto1.png';
import producto2 from '../Imagenes/Producto2.png';
import producto3 from '../Imagenes/producto3.jpg';
import '../css/productos_styles.css'

const data = {
    3: {
        id: 3,
        titulo: 'Rubia',
        precioNormal: '$10,53',
        url1: producto3,
        url2: '../rss/1espaldablanca.webp',
        precioOferta: '$8,37'
    },
    2: {
        id: 2,
        titulo: 'Maracuya',
        precioNormal: '$7,34',
        url1: producto2,
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$6,14'
    },
    1: {
        id: 1,
        titulo: 'Negra',
        precioNormal: '$7,34',
        url1: producto1,
        url2: '../rss/3 PANTALONETAFRONT.webp',
        precioOferta: '$6,14'
    },
};

const Ofertas = () => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        cambiarImagen();
    }, []);

    const obtenerProducto = (productoId) => {
        setMostrarDetalle(true);
        setProductoSeleccionado(data[productoId]);
    };

    const cambiarImagen = () => {
        Object.values(data).map((producto) => {
            let imagen = document.getElementById(`imagen${producto.id}`);
            imagen.addEventListener("mouseenter", () => {
                imagen.src = `${producto.url2}`;
            });
            imagen.addEventListener("mouseleave", () => {
                imagen.src = `${producto.url1}`;
            });
            return () => {
                imagen.removeEventListener("mouseenter", () => {
                    imagen.src = `${producto.url2}`;
                });
                imagen.removeEventListener("mouseleave", () => {
                    imagen.src = `${producto.url1}`;
                });
            };
        });
    };

    return (
        <div>
            {!mostrarDetalle ? (
                <div id="contenedorProductos">
                    {Object.values(data).map((producto) => (
                        <button
                            key={producto.id}
                            className="botonProducto"
                            onClick={() => obtenerProducto(producto.id)}
                        >
                            <div className="producto">
                                <img
                                    className="transicion"
                                    id={`imagen${producto.id}`}
                                    src={producto.url1}
                                    alt="camisa"
                                />
                                <div>
                                    <h5 className="tituloProducto">{producto.titulo}</h5>
                                    <div>
                                        <span className="tachadoO">{producto.precioNormal}</span>
                                        <span className="precio">{producto.precioOferta}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div id="contenedorUnico">
                    <div className="columna1">
                        <img
                            id={`imagen${productoSeleccionado.id}`}
                            className="imagenProducto"
                            src={productoSeleccionado.url1}
                            alt="camisa"
                        />
                    </div>
                    <div className="columna">
                        <h1 className='tituloProducto'>{productoSeleccionado.titulo}</h1>
                        {/* <span>-</span>
                        <h1>Patrocinadores</h1> */}
                        <div className="datosProducto">
                            <span className="tachadoO">{productoSeleccionado.precioNormal}</span>
                            <span >{productoSeleccionado.precioOferta}<span className="oferta">Oferta</span></span>
                            <p className='descripcionProducto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum harum, cumque, reprehenderit vero aspernatur iure debitis maiores odit pariatur voluptatibus optio. Cumque distinctio enim delectus id, illo blanditiis eos vitae.</p>
                            <div>
                                <p className='textoTamaño'>Tamaños</p>
                                <div className="tamaños">
                                    <button>150ml</button>
                                    <button>200ml</button>
                                    <button>300ml</button>
                                    <button>450ml</button>
                                    <button>800ml</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='botonVolver' onClick={() => setMostrarDetalle(false)}>Volver</button>
                </div>
            )}
        </div>
    );
};

export default Ofertas;
