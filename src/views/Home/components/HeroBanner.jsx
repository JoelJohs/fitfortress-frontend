import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./HeroBanner.css"; // Import the CSS file for additional styles

const HeroBanner = ({ onScrollToBlogs }) => {
  return (
    <div className="hero-banner position-relative d-flex align-items-center justify-content-center text-white vh-100">
      <div className="overlay"></div> {/* Add a gradient overlay */}
      <img
        src="Gimnasio-aparatos.png"
        alt="Gimnasio Aparatos"
        className="w-100 h-100 position-absolute top-0 start-0"
        style={{ objectFit: "cover", filter: "brightness(0.7)" }}
      />
      <div className="hero-content position-absolute text-center">
        <h1 className="display-1 mb-3 text-shadow">Bienvenido a FitFortress</h1>{" "}
        {/* Add text-shadow class */}
        <p className="fs-3 mb-4 text-shadow">
          Transforma tu vida con nuestras rutinas y planes personalizados.
        </p>
        <button
          onClick={onScrollToBlogs}
          className="btn btn-primary btn-lg animate-btn"
        >
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
