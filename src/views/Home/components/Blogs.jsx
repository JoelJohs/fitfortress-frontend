import PropTypes from "prop-types";
import "./blog.css";
import { LikeIcon } from "../../../assets/BlogIcons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { deleteBlog } from "../../../utils/dbConnection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar los estilos de Toastify

const Blogs = ({ blog, onDelete, onUpdate }) => {
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que deseas borrar?")) {
      try {
        await deleteBlog(blog._id);
        console.log("Blog deleted:", blog._id);

        toast.success("Blog eliminado exitosamente");
        if (typeof onDelete === "function") {
          onDelete(blog._id);
        }
        if (typeof onUpdate === "function") {
          onUpdate();
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("Error al eliminar el blog");
      }
    }
  };

  return (
    <article className="card shadow-sm h-100">
      <div className="article-image">
        <img src={blog.imagen} alt={blog.titulo} className="card-img-top" />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{blog.titulo}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: blog.contenido.substring(0, 100) + "...",
          }}
        ></div>
        <p className="article-likes mb-2">
          <LikeIcon /> {blog.likes}
        </p>
        <div className="d-flex justify-content-center gap-2">
          <Link to={`/blog/${blog._id}`} className="btn btn-primary">
            Leer más
          </Link>
          {user && user.role === "admin" && (
            <button className="btn btn-danger" onClick={handleDelete}>
              Eliminar
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

Blogs.propTypes = {
  blog: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Blogs;
