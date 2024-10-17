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
      <div style={{ position: 'relative', display: 'inline-block' }}>
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={handleSearch}
    style={{ paddingLeft: '30px' }} 
  />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        position: 'absolute',
        left: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '16px',
        height: '16px',
      }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>

      </div>
    </main>
  );
};

export default Home;
