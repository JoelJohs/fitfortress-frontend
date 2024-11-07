import "./login.css";

const Login = () => {
  return (
    <>
      <div className="decoracion">
        <h1>
          BIENVENIDO DE NUEVO <br /> AL MUNDO FITNESS
        </h1>
      </div>
      <div className="principal">
        <img
          style={{ filter: "blur(3px)" }}
          width="100%"
          src="/login_assets/Gimnasio-aparatos.png"
          alt="Gimnasio Aparatos"
        />
        <div className="datos">
          <div className="ff">
            <img className="favicon" src="/login_assets/FF.ico" alt="Favicon" />
          </div>
          <div className="ff">
            <form>
              <b>Ingrese su usuario:</b>
              <br />
              <input className="input" type="text" placeholder="Usuario" />
              <b>Ingrese su contraseña:</b>
              <br />
              <input
                className="input contraseña"
                type="password"
                placeholder="Contraseña"
              />
              <button className="log" type="submit">
                Ingresar
              </button>
              <button className="registrar" type="button">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
