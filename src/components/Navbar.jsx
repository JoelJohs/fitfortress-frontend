import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-img">
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className={`navbar-links_container ${isOpen ? "open" : ""}`}>
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

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
