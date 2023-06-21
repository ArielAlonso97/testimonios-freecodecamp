import React from 'react';
import '../hojas-de-estilo/Testimonios.css';

export function Testimonio(props) {
    
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
            src={require(`../imagenes/imagen${props.imagen}.png`)}
            alt='Foto_1'
            />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} in {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} at {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );

}


