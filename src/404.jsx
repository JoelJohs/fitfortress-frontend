import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./404.css";

const NotFound = () => {
  return (
    <div className="not-found-container text-center">
      <div className="overlay">
        <h1 className="display-1">404</h1>
        <p className="lead">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Volver a la página principal
        </Link>
      </div>
      <div className="background-elements">
        <div className="circle"></div>
        <div className="triangle"></div>
        <div className="square"></div>
        <div className="hexagon"></div>
      </div>
    </div>
  );
};

export default NotFound;
