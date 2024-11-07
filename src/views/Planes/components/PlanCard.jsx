import React from 'react';
import PropTypes from 'prop-types';
import '../plan.css';

const RutinaCard = ({ nombre, imagen, descripcion, ca1, ca2, ca3, ca4, precio }) => {
  return (
      <div className="card-container">
        <img
          src={imagen}
          alt={nombre}
          className="plan-image"
        />
        <div className="plan-info">
          <h3 className="plan-title">{nombre}</h3>
          <h1 className="plan-description">{descripcion}</h1>
          <h4 className="plan-caracteristicas">{ca1}</h4>
          <h4 className="plan-caracteristicas">{ca2}</h4>
          <h4 className="plan-caracteristicas">{ca3}</h4>  
          <h4 className="plan-caracteristicas">{ca4}</h4>
          <h1 className="plan-precio">{precio}</h1>
        </div>
      </div>
  );
};

RutinaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  ca1: PropTypes.string.isRequired,
  ca2: PropTypes.string.isRequired,
  ca3: PropTypes.string.isRequired, 
  ca4: PropTypes.string.isRequired,   
  precio: PropTypes.string.isRequired,
  descripcion: PropTypes.string, // Prop adicional para la descripción
};

export default RutinaCard;
