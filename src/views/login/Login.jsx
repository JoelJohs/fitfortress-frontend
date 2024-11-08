import { useState } from "react";
import "./login.css";

const LoginRegisterTabs = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para cambiar entre login y register

  const handleTabClick = (tab) => {
    setIsLogin(tab === "login");
  };

  return (
    <>
      <div className="decoracion">
        <h1 className="uppercase">
          Bienvenido de nuevo <br /> al mundo fitness
        </h1>
      </div>
      <div className="principal">
        <img
          className="bg-image"
          src="\Gimnasio-aparatos.png"
          alt="Gimnasio con aparatos"
        />
        <div className="datos">
          <div className="tabs">
            <button
              className={`tab ${isLogin ? "active" : ""}`}
              onClick={() => handleTabClick("login")}
            >
              Ingresar
            </button>
            <button
              className={`tab ${!isLogin ? "active" : ""}`}
              onClick={() => handleTabClick("register")}
            >
              Registrar
            </button>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </>
  );
};

const LoginForm = () => (
  <form>
    <div className="logo-container">
      <img src="logo.png" alt="Logo" className="logo" />
    </div>
    <label htmlFor="usuario" className="form-label">
      Usuario:
    </label>
    <input
      id="usuario"
      className="input"
      type="text"
      placeholder="Ingrese su usuario"
      aria-label="Campo de usuario"
    />

    <label htmlFor="password" className="form-label">
      Contraseña:
    </label>
    <input
      id="password"
      className="input"
      type="password"
      placeholder="Ingrese su contraseña"
      aria-label="Campo de contraseña"
    />

    <button className="btn log uppercase" type="submit">
      Ingresar
    </button>
  </form>
);

const RegisterForm = () => (
  <form>
    <div className="logo-container">
      <img src="/logo.png" alt="Logo" className="logo" />
    </div>
    <label htmlFor="usuario" className="form-label">
      Usuario:
    </label>
    <input
      id="usuario"
      className="input"
      type="text"
      placeholder="Ingrese su usuario"
      aria-label="Campo de usuario"
    />

    <label htmlFor="email" className="form-label">
      Correo Electrónico:
    </label>
    <input
      id="email"
      className="input"
      type="email"
      placeholder="Ingrese su correo electrónico"
      aria-label="Campo de correo"
    />

    <label htmlFor="password" className="form-label">
      Contraseña:
    </label>
    <input
      id="password"
      className="input"
      type="password"
      placeholder="Ingrese su contraseña"
      aria-label="Campo de contraseña"
    />

    <button className="btn registrar uppercase" type="submit">
      Registrar
    </button>
  </form>
);

export default LoginRegisterTabs;
