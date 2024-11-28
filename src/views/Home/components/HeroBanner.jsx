import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./HeroBanner.css"; // Import the CSS file for additional styles

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="overlay"></div> {/* Add a gradient overlay */}
      <img
        src="Gimnasio-aparatos.png"
        alt="Gimnasio Aparatos"
        className="w-100 h-100"
      />
      <div className="hero-content">
        <div className="text-background">
          {" "}
          {/* Add text-background class */}
          <h1 className="display-1 mb-3 text-shadow">
            Bienvenido a FitFortress
          </h1>{" "}
          {/* Add text-shadow class */}
          <p className="fs-3 mb-4 text-shadow">
            Transforma tu vida con nuestras rutinas y planes personalizados.
          </p>
          <Link
            to="/blogs" // Use Link to navigate to /blogs
            className="btn btn-primary btn-lg animate-btn"
          >
            Ver Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  onScrollToBlogs: PropTypes.func.isRequired,
};

export default HeroBanner;
