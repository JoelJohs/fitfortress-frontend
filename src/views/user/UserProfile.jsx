import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByUsername } from "../../utils/dbConnection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css"; // Ensure to import the global styles

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserByUsername(username);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <div
        className="card shadow-lg"
        style={{ backgroundColor: "var(--secondary-color)" }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--secondary-color)",
          }}
        >
          <h1 style={{ fontWeight: "bold", color: "white" }}>
            Perfil de {user.username}
          </h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={user.fotoPerfil}
                alt="Profile"
                className="img-fluid rounded-circle mb-3 shadow-sm"
              />
            </div>
            <div className="col-md-8">
              <h3 className="mb-3">
                {user.nombre} {user.apellido}
              </h3>
              <p>
                <strong>Correo Electrónico:</strong> {user.email}
              </p>
              <p>
                <strong>Tipo de Cuenta:</strong> {user.tipoCuenta}
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong>{" "}
                {new Date(user.fechaNacimiento).toLocaleDateString()}
              </p>
              <p>
                <strong>Edad:</strong> {calculateAge(user.fechaNacimiento)} años
              </p>
              <p>
                <strong>Género:</strong> {user.genero}
              </p>
              <p>
                <strong>Fecha de Registro:</strong>{" "}
                {new Date(user.fechaRegistro).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
