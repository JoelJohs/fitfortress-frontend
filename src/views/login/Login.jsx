import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { registerUser, getUserByUsername } from "../../utils/dbConnection"; // Import registerUser and getUserByUsername
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginRegisterTabs = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    setIsLogin(tab === "login");
  };

  const handleLogin = async (e) => {
    console.log("Login");
    e.preventDefault();
    const credentials = {
      username: e.target.usuario.value, 
      password: e.target.password.value,
    };
    try {
      const user = await getUserByUsername(credentials.username); // Fetch user details
      await login({ ...credentials, role: user.role, tipoCuenta: user.tipoCuenta }); // Pass user details to login
      console.log("Logged in:", credentials.username, credentials.password);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      fechaNacimiento: e.target.fechaNacimiento.value,
      genero: e.target.genero.value,
    };
    try {
      await registerUser(newUser);
      console.log("User registered:", newUser);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="container-fluid principal d-flex align-items-center justify-content-center">
      <div className="row bg-overlay w-100 justify-content-center">
        <div className="col-md-6 d-none d-md-flex decoracion align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1 className="display-4">Bienvenido de nuevo</h1>
            <p>Al mundo fitness</p>
          </div>
        </div>
        <div className="col-md-6 datos p-5 mx-auto">
          <div className="tabs d-flex justify-content-around mb-4">
            <button
              className={`tab btn ${
                isLogin ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleTabClick("login")}
            >
              Ingresar
            </button>
            <button
              className={`tab btn ${
                !isLogin ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleTabClick("register")}
            >
              Registrar
            </button>
          </div>
          {isLogin ? <LoginForm handleLogin={handleLogin} /> : <RegisterForm handleRegister={handleRegister} />}
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({ handleLogin }) => (
  <form className="text-center" onSubmit={handleLogin}>
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
    <button
      className="btn btn-primary w-100 text-uppercase modern-button"
      type="submit"
    >
      Ingresar
    </button>
    <p className="mt-3">
      <a href="#" className="text-danger">
        ¿Olvidaste tu contraseña?
      </a>
    </p>
  </form>
);

const RegisterForm = ({ handleRegister }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  return (
    <form className="text-center" onSubmit={handleRegister}>
      <div className="logo-container mb-4">
        <img src="/logo.png" alt="Logo" className="logo rounded-circle" />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            id="nombre"
            className="form-control"
            type="text"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            id="apellido"
            className="form-control"
            type="text"
            placeholder="Ingrese su apellido"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario:
        </label>
        <input
          id="username"
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
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirmar Contraseña:
        </label>
        <input
          id="confirmPassword"
          className="form-control"
          type="password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordMatch && (
          <small className="text-danger">Las contraseñas no coinciden</small>
        )}
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="genero" className="form-label">
            Género:
          </label>
          <select id="genero" className="form-control">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de Nacimiento:
          </label>
          <input id="fechaNacimiento" className="form-control" type="date" />
        </div>
      </div>
      <button
        className="btn btn-primary w-100 text-uppercase modern-button"
        type="submit"
      >
        Registrar
      </button>
    </form>
  );
};

export default LoginRegisterTabs;
