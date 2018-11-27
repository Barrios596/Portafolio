import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Tarjeta = ({tarjeta}) => {
    const {indice, img, nombre, desc, link, logo} = tarjeta
    return(
        <div id={`carta-${indice}`} className="tarjeta" >
        
        <a href={link} target="_blank">
            <img src={img} className="img" alt={nombre}/>
        </a>
            <div className="detalles">
                <span className="index">{indice+1}</span>
                <h2>{nombre}</h2>
                <p className="descripcion">{desc}</p>
            </div>
            <a href={link} target="_blank">
            <div>
                <img className="icon" src={logo} href={link}></img>
            </div>
            </a>
        </div>
        
    )
}

Tarjeta.propTypes = {
    tarjeta: PropTypes.object.isRequired
}

export default Tarjeta