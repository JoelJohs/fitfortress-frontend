import React from 'react';
import './styles/Rutinas.css';

function App() {
    return (
        <div>
            <div className="cabeza">
                <div className="logo">
                    <a href="index.html">
                        <img src="images/FF.ico" alt="Logo" />
                    </a>
                </div>
                <h1>LAS MEJORES RUTINAS HECHAS <br /> POR LOS MEJORES ENTRENADORES</h1>
                <button>CONTACTANOS</button>
            </div>

            <section className="rutinas">
                <h1>QUE TIPO DE RUTINA BUSCAS?</h1>

                <div className="img1">
                    <h2>DEFINICION</h2>
                    <img src="images/rutinas-de-definicion-696x503-removebg-preview (1).png" alt="Definición" />
                    <div className="texto">
                        <p>Si lo que buscas es <br /> definir tu cuerpo esto es para ti</p>
                        <button>IR A LA RUTINA</button>
                    </div>
                </div>

                <div className="img1">
                    <h2>VOLUMEN</h2>
                    <img src="images/download-removebg-preview.png" alt="Volumen" />
                    <div className="texto">
                        <p>Si lo que buscas es <br /> aumentar tu tamaño esto es para ti</p>
                        <button>IR A LA RUTINA</button>
                    </div>
                </div>

                <div className="img1">
                    <h2>PERDER PESO</h2>
                    <img src="images/images-removebg-preview.png" alt="Perder Peso" />
                    <div className="texto">
                        <p>Si lo que buscas es <br /> perder grasa o peso esto es para ti</p>
                        <button>IR A LA RUTINA</button>
                    </div>
                </div>
            </section>

            <div className="separador"></div>

            <section className="chatbot">
                <div>
                    <div className="img1">
                        <img src="images/robot-removebg-preview.png" alt="ChatBot" />
                        <div className="texto">
                            <p>Si ya tienes una rutina y tienes preguntas <br /> puedes visitar nuestro ChatBot</p>
                            <button>IR A CHATBOT</button>
                        </div>
                    </div>
                    <h3>
                        Además de resolver dudas, en nuestro ChatBot también puedes pedirle consejos, informarte sobre las mejores comidas según tu tipo de cuerpo, pedirle una dieta basada en tu vida diaria, y encontrar apartados de rutinas de volumen, definición, y perder peso para ajustarlas a tu gusto.
                        <br />
                        En FitFortress estamos orgullosos de nuestra buena puntuación entre los clientes, gracias al ChatBot que brinda información confiable.
                    </h3>
                </div>
            </section>

            <div className="separador2"></div>

            <footer>
                <div className="social-media">
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <img src="images/whats-removebg-preview.png" alt="WhatsApp" />
                    </a>
                    <a href="https://instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="images/insta-removebg-preview.png" alt="Instagram" />
                    </a>
                    <a href="https://facebook.com/tu_perfil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="images/face-removebg-preview.png" alt="Facebook" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Rutinas;