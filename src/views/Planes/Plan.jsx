import { useEffect } from "react";
import PlanCard from "./components/PlanCard";
import "./plan.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Routines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const planes = [
    {
      nombre: "Plan Fuerza Total",
      imagen: "/sample.png",
      descripcion:
        "Este plan se centra en el aumento de la fuerza muscular a través de ejercicios de resistencia con pesas y trabajo en circuito. Ideal para quienes buscan ganar músculo y mejorar su capacidad de levantamiento.",
      caracteristicas: [
        "Ejercicios con pesas libres",
        "Rutinas de resistencia avanzada",
        "Trabajo en circuito para máxima quema de calorías",
        "Programación personalizada de progresión de peso",
      ],
      precio: "$99.99",
    },
    {
      nombre: "Plan Cardio Avanzado",
      imagen: "/sample.png",
      descripcion:
        "Un plan diseñado para mejorar la resistencia cardiovascular y aumentar la capacidad aeróbica mediante entrenamientos de alta intensidad como HIIT, sprints y entrenamiento en máquinas cardiovasculares.",
      caracteristicas: [
        "HIIT (Entrenamiento en intervalos de alta intensidad)",
        "Sprints en cinta de correr y bicicleta",
        "Programas de entrenamiento por tiempo (25-45 minutos por sesión)",
        "Aumento de la quema de calorías en poco tiempo",
      ],
      precio: "$199.99",
    },
    {
      nombre: "Plan Body Balance",
      imagen: "/sample.png",
      descripcion:
        "Este plan está enfocado en mejorar el equilibrio, la flexibilidad y la postura a través de una combinación de yoga, pilates y ejercicios funcionales. Es ideal para quienes buscan tonificar su cuerpo mientras mejoran su movilidad.",
      caracteristicas: [
        "Yoga para aumentar flexibilidad",
        "Pilates para fortalecer el core",
        "Ejercicios funcionales para mejorar postura y equilibrio",
        "Técnicas de respiración y relajación para reducir el estrés",
      ],
      precio: "$299.99",
    },
  ];

  return (
    <div className="planes-landing-container">
      <header className="planes-header">
        <div className="header-container">
          <h1 className="planes-title">Planes</h1>
          <p className="planes-description">
            Descubre nuestros planes diseñados para mejorar tu salud y bienestar. Elige el que mejor se adapte a tus objetivos y comienza tu transformación hoy mismo.
          </p>
        </div>
      </header>

      <main className="planes-grid-container">
        <div className="planes-grid">
          {planes.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Routines;
