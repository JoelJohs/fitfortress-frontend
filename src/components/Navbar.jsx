import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-img">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <div className="navbar-links_container">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/rutinas">Rutinas</a>
          </li>
          <li>
            <a href="/asistente">Asistente virtual</a>
          </li>
          <li>
            <a href="/plan">Planes</a>
          </li>
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/login">Conectarse</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
