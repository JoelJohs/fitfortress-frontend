const Blogs = ({ blog }) => {
  return (
    <article className="article-container">
      <div>
        <img src={blog.image} alt={blog.title} />
      </div>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.briefText}</p>
        <a href={`/blog/${blog.id}`}>Leer más</a>
      </div>
    </article>
  );
};

export default Blogs;
