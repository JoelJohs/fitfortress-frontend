import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./sideBlogs.css";

const SideBlogs = ({ randomBlogs }) => {
  return (
    <div className="sidebar">
      <h2>Otros Blogs</h2>
      <div className="sidebar-blogs">
        {randomBlogs.map((randomBlog) => (
          <div key={randomBlog.id} className="sidebar-blog-card">
            <img src={randomBlog.imagen} alt={randomBlog.titulo} />
            <h3>{randomBlog.titulo}</h3>
            <p>{randomBlog.contenido.substring(0, 50)}...</p>
            <Link to={`/blog/${randomBlog.id}`} className="btn btn-primary">
              Leer más
            </Link>
            <div className="related-blog-etiquetas">
              {randomBlog.etiquetas.map((etiqueta, index) => (
                <span key={index} className="related-blog-etiqueta">
                  {etiqueta}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBlogs;

SideBlogs.propTypes = {
  randomBlogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      contenido: PropTypes.string.isRequired,
      etiquetas: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
