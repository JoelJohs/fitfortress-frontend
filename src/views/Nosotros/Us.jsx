import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./us.css";

const Us = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="hero-banner position-relative text-center text-white">
        <img
          className="w-100 h-100 object-fit-cover"
          src="/team.jpg"
          alt="Nuestro equipo"
        />
        <div className="hero-content position-absolute top-50 start-50 translate-middle">
          <div className="blackbox p-3">
            <h1 className="display-4 text-white-bold">Sobre Nosotros</h1>
            <p className="lead">
              Conoce más sobre nuestro equipo y nuestra misión.
            </p>
          </div>
        </div>
      </div>
      <div className="content my-5 p-4 bg-light rounded shadow">
        <section className="mb-5">
          <h2 className="text-accent">Nuestra Misión</h2>
          <p>
            En FitFortress, nuestra misión es ayudarte a alcanzar tus metas de
            fitness y bienestar. Creemos en el poder del ejercicio y la
            nutrición para transformar vidas, y estamos comprometidos a
            proporcionarte las herramientas y el apoyo que necesitas para tener
            éxito.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="text-accent">Nuestra Visión</h2>
          <p>
            Nuestra visión es ser líderes en el ámbito del fitness y el bienestar,
            inspirando a personas de todas las edades y niveles de habilidad a
            vivir una vida más saludable y activa. Nos esforzamos por crear una
            comunidad inclusiva y solidaria donde todos puedan alcanzar sus
            objetivos personales.
          </p>
        </section>
        <section>
          <h2 className="text-accent">Conoce a Nuestro Equipo</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 text-center mb-4">
                <img
                  className="rounded-circle mb-3"
                  src={member.imagen}
                  alt={`Miembro del equipo ${index + 1}`}
                  width="150"
                  height="150"
                />
                <h3 className="text-bold">{member.nombre}</h3>
                <p className="text-complementary">{member.rol}</p>
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
