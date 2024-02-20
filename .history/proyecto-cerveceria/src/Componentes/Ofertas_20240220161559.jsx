import React, { useState, useEffect } from 'react';
import producto3 from '../Imagenes/producto1.jpg';
import '../css/productos_styles.css'

const data = {
    3: {
        id: 3,
        titulo: 'Hs camiseta Once Caldas Oficial Pro Elites - Patrocinadores',
        precioNormal: '$60,53',
        url1: producto3,
        url2: '../rss/1espaldablanca.webp',
        precioOferta: '$42,37'
    },
    2: {
        id: 2,
        titulo: 'Hs Uniforme Visitante Deportivo Cali ACADEMIA',
        precioNormal: '$37,34',
        url1: producto3,
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$26,14'
    },
    1: {
        id: 1,
        titulo: 'Hs Uniforme Deportivo Cali ACADEMIA',
        precioNormal: '$37,34',
        url1: producto3,
        url2: '../rss/3 PANTALONETAFRONT.webp',
        precioOferta: '$26,14'
    },
};

const Productos = () => {
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
                                    <h5>{producto.titulo}</h5>
                                    <div>
                                        <span className="tachado">{producto.precioNormal}</span>
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
                        <h1>{productoSeleccionado.titulo}</h1>
                        <span>-</span>
                        <h1>Patrocinadores</h1>
                        <span style={{ marginTop: '30px', marginBottom: '20px' }}>45646</span>
                        <div className="datosProducto">
                            <span className="tachado">{productoSeleccionado.precioNormal}</span>
                            <span>{productoSeleccionado.precioOferta}<span className="oferta">Oferta</span></span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum harum, cumque, reprehenderit vero aspernatur iure debitis maiores odit pariatur voluptatibus optio. Cumque distinctio enim delectus id, illo blanditiis eos vitae.</p>
                            <div>
                                <p>Talla</p>
                                <div className="tallas">
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>XL</button>
                                    <button>XXL</button>
                                    <button>XXXL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setMostrarDetalle(false)}>Volver</button>
                </div>
            )}
        </div>
    );
};

export default Productos;
