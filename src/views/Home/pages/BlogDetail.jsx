import { Link, useParams } from "react-router-dom";
import tempDb from "../../../utils/tempDb";
import "./blogDetail.css";
import { useState, useEffect } from "react";
import { LikeIcon } from "../../../assets/BlogIcons";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = tempDb.find((blog) => blog.id === parseInt(id));
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hasta la parte superior al cargar el componente

    const shuffledBlogs = tempDb
      .filter((b) => b.id !== parseInt(id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomBlogs(shuffledBlogs);
  }, [id]);

  if (!blog) {
    return <div className="not-found">Blog no encontrado</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <h1 className="blog-title">{blog.titulo}</h1>
        <div className="blog-meta-under-title">
          <span className="blog-author">{blog.autor.username}</span>
          <span className="blog-date">
            {new Date(blog.fechaCreacion).toLocaleDateString()}
          </span>
          <span className="blog-category">{blog.categoria}</span>
        </div>
        <div className="blog-etiquetas">
          {blog.etiquetas.map((etiqueta, index) => (
            <span key={index} className="blog-etiqueta">
              {etiqueta}
            </span>
          ))}
        </div>
        <img className="blog-image" src={blog.imagen} alt={blog.titulo} />
        <p className="blog-content">{blog.contenido}</p>
        <div className="blog-likes">
          <LikeIcon width={"20px"} height={"20px"} /> {blog.likes}
        </div>
      </div>
      <aside className="sidebar">
        <h2>Otros Blogs</h2>
        <div className="sidebar-blogs">
          {randomBlogs.map((randomBlog) => (
            <div key={randomBlog.id} className="sidebar-blog-card">
              <img src={randomBlog.imagen} alt={randomBlog.titulo} />
              <h3>{randomBlog.titulo}</h3>
              <p>{randomBlog.contenido.substring(0, 50)}...</p>
              <Link to={`/blog/${randomBlog.id}`} className="read-more">
                Leer más
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BlogDetail;
