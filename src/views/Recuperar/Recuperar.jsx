import React from "react";
import "./Recuperar.css";

const RecuperarContrasena = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img className="logo" src="images/FF.ico" alt="Logo" />
          <h1>Recuperar Contraseña</h1>
          <p>Ingresa tu correo electrónico registrado para restablecer tu contraseña.</p>
          <form action="/password-recovery" method="POST">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <button type="submit" className="btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecuperarContrasena;
