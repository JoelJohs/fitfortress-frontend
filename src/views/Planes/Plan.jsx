import PlanCard from './components/PlanCard';

const Routines = () => {
  const planes = [
    { nombre: "Plan Fuerza Total", imagen: "/sample.png",  descripcion: "Este plan se centra en el aumento de la fuerza muscular a través de ejercicios de resistencia con pesas y trabajo en circuito. Ideal para quienes buscan ganar músculo y mejorar su capacidad de levantamiento.",  ca1: "Ejercicios con pesas libres", ca2: "Rutinas de resistencia avanzada", ca3:"Trabajo en circuito para máxima quema de calorías", ca4: "Programación personalizada de progresión de peso", precio: "$99.99" },
    { nombre: "Plan Cardio Avanzado", imagen: "/sample.png",  descripcion: "Un plan diseñado para mejorar la resistencia cardiovascular y aumentar la capacidad aeróbica mediante entrenamientos de alta intensidad como HIIT, sprints y entrenamiento en máquinas cardiovasculares.", ca1: "HIIT (Entrenamiento en intervalos de alta intensidad)", ca2: "Sprints en cinta de correr y bicicleta", ca3:"Programas de entrenamiento por tiempo (25-45 minutos por sesión)", ca4: "Aumento de la quema de calorías en poco tiempo", precio: "$199.99" },
    { nombre: "Plan Body Balance", imagen: "/sample.png",  descripcion: "Este plan está enfocado en mejorar el equilibrio, la flexibilidad y la postura a través de una combinación de yoga, pilates y ejercicios funcionales. Es ideal para quienes buscan tonificar su cuerpo mientras mejoran su movilidad.", ca1: "Yoga para aumentar flexibilidad", ca2: "Pilates para fortalecer el core", ca3:"Ejercicios funcionales para mejorar postura y equilibrio", ca4: "Técnicas de respiración y relajación para reducir el estrés", precio: "$299.99" },
  ];

  return (
    <div className="planes-landing-container">
      <header className="planes-header">
        <div className="header-container">
          <h1 className="planes-title">Planes</h1>
        </div>
      </header>

      <main className="planes-grid-container">
        <div className="planes-grid">
          {planes.map((plan, index) => (
            <PlanCard 
              key={index} 
              nombre={plan.nombre} 
              imagen={plan.imagen} 
              descripcion={plan.descripcion} // Añade la prop de descripción
              ca1={plan.ca1} // Añade la prop de características
              ca2={plan.ca2} // Añade la prop de características
              ca3={plan.ca3} // Añade la prop de características
              ca4={plan.ca4} // Añade la prop de características         
              precio={plan.precio} // Añade la prop de precio
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Routines;
