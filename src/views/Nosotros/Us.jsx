import { useEffect } from "react";
import "./us.css";

const Us = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hasta la parte superior al cargar el componente
  }, []);

  const teamMembers = [
    {
      nombre: "Alejandro Fernández",
      rol: "Entrenador Personal",
      imagen: "member1.jpg",
      descripcion:
        "Con más de una década de experiencia, Alejandro ha guiado a innumerables personas en su viaje hacia una vida más saludable y activa. Su enfoque personalizado y motivador ha sido clave para transformar vidas y alcanzar objetivos de fitness.",
    },
    {
      nombre: "Isabella Martínez",
      rol: "Nutricionista",
      imagen: "member2.jpg",
      descripcion:
        "Isabella es una nutricionista certificada con una pasión por crear planes de alimentación personalizados que no solo mejoran la salud, sino que también se adaptan al estilo de vida de cada individuo. Su conocimiento profundo y su enfoque empático han ayudado a muchos a lograr un bienestar óptimo.",
    },
    {
      nombre: "Santiago Rodríguez",
      rol: "Instructor de Yoga",
      imagen: "member3.jpg",
      descripcion:
        "Santiago es un instructor de yoga dedicado que se especializa en técnicas de relajación y meditación. Su pasión por el yoga y su habilidad para enseñar a otros a encontrar la paz interior y el equilibrio han hecho de sus clases una experiencia transformadora para muchos.",
    },
  ];

  return (
    <div className="us-container">
      <div className="us-banner">
        <img className="bg-image" src="/team.jpg" alt="Nuestro equipo" />
        <div className="us-banner-content">
          <h1>Sobre Nosotros</h1>
          <p>Conoce más sobre nuestro equipo y nuestra misión.</p>
        </div>
      </div>
      <div className="us-content">
        <section className="about-section">
          <h2>Nuestra Misión</h2>
          <p>
            En FitFortress, nuestra misión es ayudarte a alcanzar tus metas de
            fitness y bienestar. Creemos en el poder del ejercicio y la
            nutrición para transformar vidas, y estamos comprometidos a
            proporcionarte las herramientas y el apoyo que necesitas para tener
            éxito.
          </p>
        </section>
        <section className="team-section">
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.imagen}
                  alt={`Miembro del equipo ${index + 1}`}
                />
                <h3>{member.nombre}</h3>
                <p>{member.rol}</p>
                <p>{member.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Us;
