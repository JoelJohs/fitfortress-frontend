import React from 'react'
import RutinaCard from './components/RutinaCard'

const Routines = () => {
  const rutinas = [
    { nombre: "Rutina de Fuerza", imagen: "../../../public/sample.png", blogUrl: "#" },
    { nombre: "Cardio Intenso", imagen: "../../../public/sample.png", blogUrl: "#" },
  ];

  return (
    <div className="rutinas-landing-container">
      <header className="rutinas-header">
        <div className="header-container">
          <h1 className="rutinas-title">Rutinas</h1>
        </div>
      </header>

      <main className="rutinas-grid-container">
        <div className="rutinas-grid">
          {rutinas.map((rutina, index) => (
            <RutinaCard key={index} nombre={rutina.nombre} imagen={rutina.imagen} blogUrl={rutina.blogUrl} />
          ))}
        </div>
      </main>
    </div>
  );

}

export default Routines