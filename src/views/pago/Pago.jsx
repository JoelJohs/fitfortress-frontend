import React from "react";
import "./Pago.css";

const PagoPlan = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Pago del Plan</h1>
          <p>Confirma los detalles de tu plan y completa el pago.</p>

          {/* Detalles del plan */}
          <div className="plan-details">
            <h2>
              Plan Seleccionado: <span id="plan-name">Premium</span>
            </h2>
            <p>
              Precio: <span id="plan-price">$50 USD</span>
            </p>
          </div>

          {/* Formulario de pago */}
          <form action="/procesar-pago" method="POST">
            <div className="form-group">
              <label htmlFor="card-name">Nombre del titular</label>
              <input
                type="text"
                id="card-name"
                name="card-name"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Número de tarjeta</label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                placeholder="1234 5678 9012 3456"
                maxLength="16"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Fecha de expiración</label>
              <input
                type="text"
                id="expiry-date"
                name="expiry-date"
                placeholder="MM/AA"
                maxLength="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
            <button type="submit" className="btn">
              Pagar Ahora
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PagoPlan;
