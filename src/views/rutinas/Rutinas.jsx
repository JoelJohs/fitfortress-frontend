import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

const Rutinas = () => {
  return (
    <div>
      <section className="container my-5">
        <h1
          className="text-center fw-bold"
          style={{ color: "var(--light-text-color)" }} /* Improved contrast */
        >
          ¿Qué tipo de rutina buscas?
        </h1>

        <div className="row my-4">
          <div className="col-md-4">
            <div className="card-container">
              <img
                src="rutina-definicion-muscular.jpg"
                alt="Definición"
                className="plan-image"
              />
              <div className="plan-info">
                <h2 className="plan-title">Definición</h2>
                <p className="plan-description">
                  Si lo que buscas es <br /> definir tu cuerpo esto es para ti
                </p>
                <button className="btn btn-primary mt-3">Ir a la rutina</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-container">
              <img
                src="ganancia-muscular.jpg"
                alt="Volumen"
                className="plan-image"
              />
              <div className="plan-info">
                <h2 className="plan-title">Volumen</h2>
                <p className="plan-description">
                  Si lo que buscas es <br /> aumentar tu tamaño esto es para ti
                </p>
                <button className="btn btn-primary mt-3">Ir a la rutina</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-container">
              <img
                src="perder-peso.jpg"
                alt="Perder Peso"
                className="plan-image"
              />
              <div className="plan-info">
                <h2 className="plan-title">Perder peso</h2>
                <p className="plan-description">
                  Si lo que buscas es <br /> perder grasa o peso esto es para ti
                </p>
                <button className="btn btn-primary mt-3">Ir a la rutina</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2" style={{ backgroundColor: "var(--primary-color)" }}>
        <section className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="bot.png"
                alt="ChatBot"
                className="img-fluid rounded"
                style={{ width: "150px", height: "150px" }}
              />
              <p style={{ color: "var(--dark-text-color)" }}>
                Si ya tienes una rutina y tienes preguntas <br /> puedes visitar
                nuestro <strong>ChatBot</strong>
              </p>
            </div>
            <div className="col-md-8">
              <div className="mt-3">
                <button
                  className="btn btn-primary mt-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    color: "#fff", // White text
                  }}
                >
                  Ir a ChatBot
                </button>
              </div>
              <p className="mt-4" style={{ color: "var(--dark-text-color)" }}>
                Además de resolver dudas, en nuestro <strong>ChatBot</strong>{" "}
                también puedes pedirle consejos, informarte sobre las mejores
                comidas según tu tipo de cuerpo, pedirle una dieta basada en tu
                vida diaria, y encontrar apartados de rutinas de volumen,
                definición, y perder peso para ajustarlas a tu gusto.
                <br />
                En FitFortress estamos orgullosos de nuestra buena puntuación
                entre los clientes, gracias al <strong>ChatBot</strong> que
                brinda información confiable.
              </p>
            </div>
          </div>
        </section>

        <div
          className="py-2"
          style={{ backgroundColor: "var(--accent-color)" }}
        ></div>
      </div>
    </div>
  );
};

export default Rutinas;
