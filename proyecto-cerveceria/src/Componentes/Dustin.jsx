import React, { useState } from 'react';

const data = {
    3: {
        id: 3,
        titulo: 'Hs camiseta Once Caldas Oficial Pro Elites - Patrocinadores',
        precioNormal: '$60,53',
        url1: '../rss/1camisetacaliverdefrontal.webp',
        url2: '../rss/1espaldablanca.webp',
        precioOferta: '$42,37'
    },
    2: {
        id: 2,
        titulo: 'Hs Uniforme Visitante Deportivo Cali ACADEMIA',
        precioNormal: '$37,34',
        url1: '../rss/2 camisetacaliblackfrontal.webp',
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$26,14'
    },
    1: {
        id: 1,
        titulo: 'Hs Uniforme Deportivo Cali ACADEMIA',
        precioNormal: '$37,34',
        url1: '../rss/3 camisetacaliverdefrontal2.webp',
        url2: '../rss/3 PANTALONETAFRONT.webp',
        precioOferta: '$26,14'
    },
};

const Productos = () => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProducto = (productoId) => {
        setMostrarDetalle(true);
        setProductoSeleccionado(data[productoId]);
    };

    const cambiarImagen = (producto) => {
        return () => {
            const imagen = document.getElementById(`imagen${producto.id}`);
            imagen.src = producto.url2;
        };
    };

    const resetearImagen = (producto) => {
        return () => {
            const imagen = document.getElementById(`imagen${producto.id}`);
            imagen.src = producto.url1;
        };
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
                                    onMouseEnter={cambiarImagen(producto)}
                                    onMouseLeave={resetearImagen(producto)}
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
                    {/* Aquí mostrarías el detalle del producto seleccionado */}
                    <button onClick={() => setMostrarDetalle(false)}>Volver</button>
                </div>
            )}
        </div>
    );
};

export default Productos;
