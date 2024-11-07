import React from 'react'
import PropTypes from 'prop-types'
import '../routines.css' 

const RutinaCard = ({ nombre, imagen, blogUrl }) => {
  return (
    <a href={blogUrl} className="rutina-card">
      <div className="card-container">
        <img
          src={imagen}
          alt={nombre}
          className="rutina-image"
        />
        <div className="rutina-info">
          <h3 className="rutina-title">{nombre}</h3>
        </div>
      </div>
    </a>
  )
}
RutinaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  blogUrl: PropTypes.string.isRequired,
}

export default RutinaCard