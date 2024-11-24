import PropTypes from "prop-types";
import "./blog.css";
import { LikeIcon } from "../../../assets/BlogIcons";
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
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
        <Link to={`/blog/${blog._id}`} className="btn btn-primary">
          Leer más
        </Link>
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
};

export default Blogs;
