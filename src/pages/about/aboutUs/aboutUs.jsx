// src/Pages/Articles/Articles.jsx
import "./aboutUs.css"
function Articles() {
  return (
    <div className="articles-page container">
      <h2>Articles</h2>
      <p>Here you’ll find all APonomics articles.</p>

      {/* Example structure */}
      <div className="article-card">
        <h3>Sample Article 1</h3>
        <p>
          This is a preview of the first article. Click below to read the full
          text.
        </p>
        <button>Read More</button>
      </div>

      <div className="article-card">
        <h3>Sample Article 2</h3>
        <p>
          Another article preview goes here. Later you can link these to detail
          pages.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Articles;
