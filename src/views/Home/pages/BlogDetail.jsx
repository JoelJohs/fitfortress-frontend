import { useParams } from "react-router-dom";
import tempDb from "../../../utils/tempDb";
import "./blogDetail.css";
import { useState, useEffect } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = tempDb.find((blog) => blog.id === parseInt(id));
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    const shuffledBlogs = tempDb
      .filter((b) => b.id !== parseInt(id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomBlogs(shuffledBlogs);
  }, [id]);

  if (!blog) {
    return <div>Blog no encontrado</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <p>{blog.fullText}</p>
      </div>
      <aside className="sidebar">
        <h2>Otros Blogs</h2>
        <div className="sidebar-blogs">
          {randomBlogs.map((randomBlog) => (
            <div key={randomBlog.id} className="sidebar-blog-card">
              <img src={randomBlog.image} alt={randomBlog.title} />
              <h3>{randomBlog.title}</h3>
              <a href={`/blog/${randomBlog.id}`}>Leer más</a>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BlogDetail;
