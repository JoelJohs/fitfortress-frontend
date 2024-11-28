import { useState, useEffect, useContext } from "react";
import { getBlogs } from "../../utils/dbConnection";
import Blogs from "../Home/components/Blogs";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./AllBlogs.css";

const AllBlogs = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleDelete = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
  };

  const handleUpdate = () => {
    // Logic to update the blogs list
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.titulo
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(blog.categoria);
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(blogs.map((blog) => blog.categoria))];

  return (
    <div className="all-blogs-container">
      <div className="container my-4 custom-container">
        {/* Botón destacado para crear blog */}
        {user && (user.role === "personal" || user.role === "admin") && (
          <div className="text-center mb-4">
            <h2 className="mb-3">Administra tus Blogs</h2>
            <Link
              className="btn btn-lg btn-primary px-5 py-3"
              to="/escribir-blog"
            >
              + Crear Nuevo Blog
            </Link>
          </div>
        )}
        {/* Barra de búsqueda */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Busca un blog por título 🔎"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        <h5
          style={{ color: "var(--dark-text-color)" }}
          className="text-center mt-5 mb-3"
        >
          Filtrar por Categorías:
        </h5>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className={`badge rounded-pill ${
                selectedCategories.includes(category)
                  ? "bg-primary text-white"
                  : "bg-light text-dark border"
              }`}
              onClick={() => handleCategoryChange(category)}
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                fontSize: "14px",
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      {/* Lista de blogs */}
      <div className="container custom-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredBlogs.map((blog, idx) => (
            <div key={idx} className="col">
              <div className="card h-100 shadow-sm border-0">
                <Blogs
                  blog={blog}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
