import React, { useState } from "react";
import "./styles/login.css";

const ChatBot = () => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        "Bienvenido al ChatBot! ¿En qué puedo ayudarte hoy?",
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
        <div className="container">
    <div className="sidebar">
        <img className="logo" src="images/FF.ico" alt="Logo" />
        <button className="option-button">Nutrición</button>
        <button className="option-button">Dieta</button>
        <button className="option-button">Ejercicios</button>
        <button className="option-button">Perder peso</button>
        <button className="option-button">Ganar masa muscular</button>
    </div>
    <div className="chat-area">
        <div className="chat-header">
            <h1>Bienvenido al ChatBot de FF</h1>
        </div>
        <div className="chat-body">
            <div className="message bot-message">¿En qué puedo ayudarte hoy?</div>
            {/* Aquí se agregarán más mensajes */}
        </div>
        <div className="chat-footer">
            <input className="chat-input" type="text" placeholder="Escribe un mensaje..." />
            <button className="send-button">→</button>
        </div>
    </div>
</div>

    );
};

export default ChatBot;
