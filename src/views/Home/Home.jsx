import { useState } from "react";
import "./home.css";
import tempDb from "../../utils/tempDb";
import HeroBanner from "./components/HeroBanner";
import Blogs from "./components/Blogs";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBlogs = tempDb.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <HeroBanner />
      <div className="search-container">
        <input
          type="text"
          placeholder="Busca tu blog 🔎"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="carousel-container">
        {filteredBlogs.map((blog, index) => (
          <Blogs key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
