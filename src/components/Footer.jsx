import "../styles/footer.css";
import { FacebookIcon, XIcon, InstagramIcon } from "../assets/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" className="logo" />
          <p className="footer-description">
            FitFortress es tu compañero ideal para alcanzar tus metas de
            fitness. Únete a nosotros y transforma tu vida.
          </p>
        </div>
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
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
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: contacto@fitfortress.com</p>
          <p>Teléfono: +123 456 7890</p>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon width={"50px"} height={"50px"} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon width={"50px"} height={"50px"} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon width={"50px"} height={"50px"} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FitFortress. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
