import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rutinas">
                Rutinas
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/chatbot">
                Asistente virtual
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/plan">
                Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <span
                  className="nav-link"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                  style={{ position: "relative" }}
                >
                  {user.username}
                  {dropdownOpen && (
                    <div
                      className="dropdown-menu show"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#343a40",
                        color: "#fff",
                        borderRadius: "0.25rem",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <Link
                        className="dropdown-item"
                        to={`/perfil/${user.username}`}
                        style={{ color: "#fff" }}
                      >
                        Ir a mi perfil
                      </Link>
                      <hr
                        className="dropdown-divider"
                        style={{ borderColor: "#6c757d" }}
                      />
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                        style={{ color: "#fff" }}
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Conectarse
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
