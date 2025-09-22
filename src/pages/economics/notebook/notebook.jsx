// src/Pages/Articles/Articles.jsx
import "./notebook.css"
import photo from "../../../assets/notebookPhoto.jpg"
function Articles() {
  return (
    <div>
      
      <section className="hero-section"style={{backgroundImage:`url(${photo})`}}>
      <div className="hero-overlay">
        <h1 className="hero-title">The Notebook</h1>
        <p className="hero-subtitle">All the knowledge you need, condensed into note form.</p>
        </div>
    </section>
    <section className="lower-part">
      <div className="below-hero">
        <h1 className="lower-title">AS-Level Microeconomics</h1>
      </div>
    </section>
    </div>
  );
}

export default Articles;
