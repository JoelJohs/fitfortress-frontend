import PropTypes from "prop-types";
import "../plan.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PlanCard = ({ plan }) => {
  return (
    <div className="card-container">
      <img src={plan.imagen} alt={plan.nombre} className="plan-image" />
      <div className="plan-info">
        <h2 className="plan-title">{plan.nombre}</h2>
        <p className="plan-description">{plan.descripcion}</p>
        <ul className="plan-caracteristicas">
          {plan.caracteristicas.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
          ))}
        </ul>
        <h3 className="plan-precio">{plan.precio} MXN</h3>
        <button className="btn btn-primary mt-3">Comprar Plan</button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
    precio: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanCard;
