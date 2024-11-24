import { useParams } from "react-router-dom";
import "./blogDetail.css";
import { useState, useEffect } from "react";
import { LikeIcon } from "../../../assets/BlogIcons";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBlogs from "./SideBlogs";
import { getBlogById, getBlogs } from "../../../utils/dbConnection";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hasta la parte superior al cargar el componente

    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    const fetchRandomBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        if (Array.isArray(blogsData)) {
          const shuffledBlogs = blogsData
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          console.log("Fetched Random Blogs:", shuffledBlogs); // Agregar este console.log para verificar los blogs aleatorios
          setRandomBlogs(shuffledBlogs);
        } else {
          console.error("Unexpected data format:", blogsData);
        }
      } catch (error) {
        console.error("Error fetching random blogs:", error);
      }
    };

    fetchBlog();
    fetchRandomBlogs();
  }, [id]);

  if (!blog) {
    return <div className="not-found">Blog no encontrado</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container" style={{ backgroundColor: "var(--secondary-color)" }}>
        <h1 className="blog-title bold-text">{blog.titulo}</h1>
        <div className="blog-meta-under-title">
          {blog.autor && (
            <>
              <span className="blog-author">{blog.autor.username}</span>
              <span className="blog-date">
                {new Date(blog.fechaCreacion).toLocaleDateString()}
              </span>
              <span className="blog-category">{blog.categoria}</span>
            </>
          )}
        </div>
        <div className="blog-etiquetas">
          {blog.etiquetas.map((etiqueta, index) => (
            <span key={index} className="blog-etiqueta">
              {etiqueta}
            </span>
          ))}
        </div>
        <img className="blog-image" src={blog.imagen} alt={blog.titulo} />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.contenido }}
        />
        <div className="blog-likes">
          <LikeIcon width={"20px"} height={"20px"} /> {blog.likes}
        </div>
      </div>
      <SideBlogs randomBlogs={randomBlogs} />
    </div>
  );
};

export default BlogDetail;
