import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChatBot.css"; // Import custom CSS for colors

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    "Bienvenido a FitBot! ¿En qué puedo ayudarte hoy?",
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
      // Aquí puedes agregar lógica adicional para responder preguntas
    }
  };

  return (
    <div className="container mt-5" style={{ height: "90vh" }}>
      <div className="row h-100">
        <div className="col-md-3 bg-dark text-light p-4">
          <img className="img-fluid mb-3" src="/logo.png" alt="Logo" />
          <button className="btn btn-outline-light w-100 mb-2">
            Nutrición
          </button>
          <button className="btn btn-outline-light w-100 mb-2">Dieta</button>
          <button className="btn btn-outline-light w-100 mb-2">
            Ejercicios
          </button>
          <button className="btn btn-outline-light w-100 mb-2">
            Perder peso
          </button>
          <button className="btn btn-outline-light w-100 mb-2">
            Ganar masa muscular
          </button>
        </div>
        <div className="col-md-9 d-flex flex-column">
          <div className="bg-secondary text-light text-center p-3 fw-bold">
            <h1>Bienvenido a FitBot</h1>
          </div>
          <div className="flex-grow-1 p-3 bg-light overflow-auto">
            {messages.map((message, index) => (
              <div key={index} className="alert alert-secondary">
                {message}
              </div>
            ))}
          </div>
          <div className="d-flex p-3 bg-light">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Escribe un mensaje..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
