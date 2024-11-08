import "../home.css";
import PropTypes from "prop-types";

const HeroBanner = ({ onScrollToBlogs }) => {
  return (
    <div className="hero-banner">
      <img
        src="Gimnasio-aparatos.png"
        alt="Gimnasio Aparatos"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Bienvenido a FitFortress</h1>
        <p>Transforma tu vida con nuestras rutinas y planes personalizados.</p>
        <button onClick={onScrollToBlogs} className="hero-button">
          Ver Blogs
        </button>
      </div>
    </div>
  );
};
HeroBanner.propTypes = {
  onScrollToBlogs: PropTypes.func.isRequired,
};

export default HeroBanner;
