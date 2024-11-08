import PropTypes from "prop-types";
import "./blog.css";
import { LikeIcon } from "../../../assets/BlogIcons";
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  return (
    <article className="article-container">
      <div className="article-image">
        <img src={blog.imagen} alt={blog.titulo} />
      </div>
      <div className="article-content">
        <h2>{blog.titulo}</h2>
        <p>{blog.contenido.substring(0, 100)}...</p>
        <p className="article-likes">
          <LikeIcon /> {blog.likes}
        </p>
        <Link to={`/blog/${blog.id}`}>Leer más</Link>
      </div>
    </article>
  );
};

Blogs.propTypes = {
  blog: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Blogs;
