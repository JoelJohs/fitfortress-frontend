import { useState } from "react"; // Import React
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBlog } from "../../../utils/dbConnection";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";

const WriteBlog = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [etiquetas, setEtiquetas] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [contenido, setContenido] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const categorias = [
    { value: "fitness", label: "Fitness" },
    { value: "salud", label: "Salud" },
    { value: "ejercicio", label: "Ejercicio" },
  ];

  const etiquetasOptions = [
    { value: "nutricion", label: "Nutrición" },
    { value: "bienestar", label: "Bienestar" },
    { value: "fuerza", label: "Fuerza" },
    { value: "resistencia", label: "Resistencia" },
    { value: "flexibilidad", label: "Flexibilidad" },
    { value: "mental", label: "Salud Mental" },
  ];

  const handleImageUpload = (e) => {
    setImagen(e.target.files[0]); // Obtén el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        titulo,
        contenido,
        categoria: categoria.value,
        etiquetas: etiquetas.map((tag) => tag.value),
        imagen,
      };

      const response = await createBlog(blogData); // Llamamos a la función del API
      console.log("Blog creado exitosamente:", response);
      toast.success("Blog creado con éxito"); // Use toast for success message
      // Reseteamos los campos
      setTitulo("");
      setCategoria(null);
      setEtiquetas([]);
      setImagen(null);
      setContenido("");
      navigate("/blogs"); // Redirect to /blogs
    } catch (error) {
      console.error("Error al crear el blog:", error);
      toast.error("Error al crear el blog"); // Use toast for error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <ToastContainer /> {/* Add ToastContainer */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1
            className="text-center mb-4"
            style={{ color: "var(--dark-text-color)" }}
          >
            Crear Nuevo Blog
          </h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Título */}
            <div className="mb-4">
              <label htmlFor="titulo" className="form-label">
                Título del Blog
              </label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Escribe el título aquí..."
                required
              />
            </div>

            {/* Categoría y Etiquetas */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="categoria" className="form-label">
                  Categoría
                </label>
                <Select
                  id="categoria"
                  options={categorias}
                  value={categoria}
                  onChange={setCategoria}
                  placeholder="Selecciona una categoría..."
                  className="react-select-container"
                  classNamePrefix="react-select"
                  isClearable
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="etiquetas" className="form-label">
                  Etiquetas
                </label>
                <Select
                  id="etiquetas"
                  options={etiquetasOptions}
                  isMulti
                  value={etiquetas}
                  onChange={setEtiquetas}
                  placeholder="Selecciona etiquetas..."
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            {/* Imagen */}
            <div className="mb-4">
              <label htmlFor="imagen" className="form-label">
                Subir Imagen
              </label>
              <input
                type="file"
                id="imagen"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </div>

            {/* Contenido */}
            <div className="mb-4">
              <label htmlFor="contenido" className="form-label">
                Contenido
              </label>
              <ReactQuill
                theme="snow"
                value={contenido}
                onChange={setContenido}
                className="form-control quill-editor"
                placeholder="Escribe el contenido aquí..."
              />
            </div>

            {/* Botón para enviar */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                {loading ? "Publicando..." : "Publicar Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
