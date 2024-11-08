import { Link, useParams } from "react-router-dom";
import tempDb from "../../../utils/tempDb";
import "./blogDetail.css";
import { useState, useEffect } from "react";
import { LikeIcon } from "../../../assets/BlogIcons";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = tempDb.find((blog) => blog.id === parseInt(id));
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (blog) {
      // Filtra blogs que compartan etiquetas con el blog actual y no sean el mismo
      const similarBlogs = tempDb
        .filter(
          (b) =>
            b.id !== parseInt(id) &&
            b.etiquetas.some((etiqueta) => blog.etiquetas.includes(etiqueta))
        )
        .slice(0, 3); // Limitar a 3 blogs
      setRelatedBlogs(similarBlogs);
    }
  }, [id, blog]);

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
        <h2>Blogs Relacionados</h2>
        <div className="sidebar-blogs">
          {relatedBlogs.map((relatedBlog) => (
            <div key={relatedBlog.id} className="sidebar-blog-card">
              <img src={relatedBlog.imagen} alt={relatedBlog.titulo} />
              <h3>{relatedBlog.titulo}</h3>
              <p>{relatedBlog.contenido.substring(0, 50)}...</p>
              <div className="related-blog-etiquetas">
                {relatedBlog.etiquetas.map((etiqueta, index) => (
                  <span key={index} className="related-blog-etiqueta">
                    {etiqueta}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${relatedBlog.id}`} className="read-more">
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
