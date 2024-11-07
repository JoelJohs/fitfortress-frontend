import "../home.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img
        src="/login_assets/Gimnasio-aparatos.png"
        alt="Gimnasio Aparatos"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Bienvenido a FitFortress</h1>
        <p>Transforma tu vida con nuestras rutinas y planes personalizados.</p>
        <a href="/blogs" className="hero-button">
          Ver Blogs
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
