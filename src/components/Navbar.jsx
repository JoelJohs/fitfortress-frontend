import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-img">
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="navbar-links_container">
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/rutinas"}>Rutinas</Link>
          </li>
          <li>
            <Link to={"/asistente"}>Asistente virtual</Link>
          </li>
          <li>
            <Link to={"/plan"}>Planes</Link>
          </li>
          <li>
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
          <li>
            <Link to={"/login"}>Conectarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
