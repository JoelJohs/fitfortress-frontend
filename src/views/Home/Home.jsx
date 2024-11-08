import { useState, useRef } from "react";
import "./home.css";
import tempDb from "../../utils/tempDb";
import HeroBanner from "./components/HeroBanner";
import Blogs from "./components/Blogs";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const blogsRef = useRef(null);

  // Función para manejar búsqueda
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Función para desplazarse a blogs
  const handleScrollToBlogs = () => {
    blogsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Función para cambio de categoría
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  // Filtrado de blogs
  const filteredBlogs = tempDb.filter((blog) => {
    const matchesSearch = blog.titulo
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(blog.categoria);
    return matchesSearch && matchesCategory;
  });

  // Obtención dinámica de categorías únicas
  const categories = [...new Set(tempDb.map((blog) => blog.categoria))];

  return (
    <div className="home-container">
      <HeroBanner onScrollToBlogs={handleScrollToBlogs} />

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Busca tu blog 🔎"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Filter Categories */}
      <div className="filter-container">
        {categories.map((category) => (
          <label key={category} className="filter-label">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Blogs Carousel */}
      <div className="carousel-container" ref={blogsRef}>
        {filteredBlogs.map((blog, index) => (
          <Blogs key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
