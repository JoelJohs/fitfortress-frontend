import { useState } from "react";
import "./home.css";
import tempDb from "../../utils/tempDb";
import Blogs from "./components/Blogs";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBlogs = tempDb.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="home-container">
      <div className="articles">
        {filteredBlogs.map((blog, index) => (
          <Blogs key={index} blog={blog} />
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="🔎 Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </main>
  );
};

export default Home;
