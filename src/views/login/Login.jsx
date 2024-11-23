import { useState, useEffect } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginRegisterTabs = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    setIsLogin(tab === "login");
  };

  return (
    <div className="container-fluid principal d-flex align-items-center justify-content-center">
      <div className="row bg-overlay w-100">
        <div className="col-md-6 d-none d-md-flex decoracion align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1 className="display-4">Bienvenido de nuevo</h1>
            <p>Al mundo fitness</p>
          </div>
        </div>
        <div className="col-md-6 datos p-5 mx-auto">
          <div className="tabs d-flex justify-content-around mb-4">
            <button
              className={`tab btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => handleTabClick("login")}
            >
              Ingresar
            </button>
            <button
              className={`tab btn ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => handleTabClick("register")}
            >
              Registrar
            </button>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form className="text-center">
    <div className="logo-container mb-4">
      <img src="/logon.png" alt="Logo" className="logo rounded-circle" />
    </div>
    <div className="mb-3">
      <label htmlFor="usuario" className="form-label">
        Usuario:
      </label>
      <input
        id="usuario"
        className="form-control"
        type="text"
        placeholder="Ingrese su usuario"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Contraseña:
      </label>
      <input
        id="password"
        className="form-control"
        type="password"
        placeholder="Ingrese su contraseña"
      />
    </div>
    <button className="btn btn-primary w-100 text-uppercase" type="submit">
      Ingresar
    </button>
    <p className="mt-3">
      <a href="#" className="text-danger">
        ¿Olvidaste tu contraseña?
      </a>
    </p>
  </form>
);

const RegisterForm = () => (
  <form className="text-center">
    <div className="logo-container mb-4">
      <img src="/logon.png" alt="Logo" className="logo rounded-circle" />
    </div>
    <div className="mb-3">
      <label htmlFor="usuario" className="form-label">
        Usuario:
      </label>
      <input
        id="usuario"
        className="form-control"
        type="text"
        placeholder="Ingrese su usuario"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Correo Electrónico:
      </label>
      <input
        id="email"
        className="form-control"
        type="email"
        placeholder="Ingrese su correo electrónico"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Contraseña:
      </label>
      <input
        id="password"
        className="form-control"
        type="password"
        placeholder="Ingrese su contraseña"
      />
    </div>
    <button className="btn btn-primary w-100 text-uppercase" type="submit">
      Registrar
    </button>
  </form>
);

export default LoginRegisterTabs;
