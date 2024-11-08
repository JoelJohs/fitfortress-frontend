import { useState, useRef } from "react";
import "./home.css";
import tempDb from "../../utils/tempDb";
import HeroBanner from "./components/HeroBanner";
import Blogs from "./components/Blogs";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const blogsRef = useRef(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleScrollToBlogs = () => {
    blogsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredBlogs = tempDb.filter((blog) => {
    const matchesSearch = blog.titulo
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(blog.categoria);
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(tempDb.map((blog) => blog.categoria))];

  const groupedBlogs = [];
  for (let i = 0; i < filteredBlogs.length; i += 3) {
    groupedBlogs.push(filteredBlogs.slice(i, i + 3));
  }

  return (
    <div className="home-container">
      <HeroBanner onScrollToBlogs={handleScrollToBlogs} />

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="search-bar input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Busca tu blog 🔎"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="filter-section">
              <h5>Filtrar por Categoría:</h5>
              <div className="d-flex flex-wrap justify-content-center">
                {categories.map((category) => (
                  <label key={category} className="filter-label mx-2">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                      className="form-check-input me-1"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" ref={blogsRef}>
        <div className="carousel-container">
          <div className="carousel-inner">
            {groupedBlogs.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {group.map((blog, idx) => (
                    <div key={idx} className="col-md-4 mb-4 d-flex">
                      <Blogs blog={blog} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
