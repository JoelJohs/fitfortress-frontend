import { Link, useParams } from "react-router-dom";
import tempDb from "../../../utils/tempDb";
import "./blogDetail.css";
import { useState, useEffect } from "react";
import { LikeIcon } from "../../../assets/BlogIcons";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="card-title">{blog.titulo}</h1>
              <div className="d-flex justify-content-between text-muted mb-2">
                <span>{blog.autor.username}</span>
                <span>{new Date(blog.fechaCreacion).toLocaleDateString()}</span>
                <span>{blog.categoria}</span>
              </div>
              <div className="mb-3">
                {blog.etiquetas.map((etiqueta, index) => (
                  <span key={index} className="badge bg-secondary me-1">
                    {etiqueta}
                  </span>
                ))}
              </div>
              <img className="img-fluid rounded mb-3" src={blog.imagen} alt={blog.titulo} />
              <p className="card-text">{blog.contenido}</p>
              <div className="d-flex align-items-center text-danger">
                <LikeIcon width={"20px"} height={"20px"} /> {blog.likes}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h2>Otros Blogs</h2>
          {randomBlogs.map((randomBlog) => (
            <div key={randomBlog.id} className="card mb-3">
              <img src={randomBlog.imagen} className="card-img-top" alt={randomBlog.titulo} />
              <div className="card-body">
                <h5 className="card-title">{randomBlog.titulo}</h5>
                <p className="card-text">{randomBlog.contenido.substring(0, 50)}...</p>
                <Link to={`/blog/${randomBlog.id}`} className="btn btn-primary">
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
