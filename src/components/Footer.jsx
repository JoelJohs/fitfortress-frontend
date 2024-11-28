import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row footer-content">
        {/* Logo y descripción */}
        <div className="col-lg-6 col-md-6 footer-logo">
          <img src="/logo.png" alt="Logo" className="logo" />
          <p className="footer-description">
            FitFortress es tu compañero ideal para alcanzar tus metas de
            fitness. Únete a nosotros y transforma tu vida.
          </p>
        </div>

        {/* Suscripción a Newsletter */}
        <div className="col-lg-6 col-md-6 footer-newsletter">
          <h4>Suscríbete a nuestro boletín</h4>
          <p>
            Mantente al día con nuestras últimas novedades y ofertas
            especiales.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      {/* Pie de página */}
      <div className="footer-bottom">
        <p>&copy; 2024 FitFortress. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
