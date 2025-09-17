// src/Highlights.jsx
import "./Highlights.css";
import image1 from "./assets/download.jpg";
import image2 from "./assets/download (1).jpg";
import image3 from "./assets/download.png";

const items = [
  {
    id: 1,
    title: "Supply & Demand Basics",
    description:
      "A clear primer on how markets find prices and quantities — essential for APonomics learners.",
    img: image1,
  },
  {
    id: 2,
    title: "Global Trade Simplified",
    description:
      "Short, real-world cases that show how trade shapes economies and creates opportunities.",
    img: image2,
  },
  {
    id: 3,
    title: "Exam Strategies",
    description:
      "Practical tips to help students prepare and perform confidently on economics exams.",
    img: image3,
  },
];

export default function Highlights() {
  return (
    <section className="highlights-section container" aria-label="Article highlights">
      <h2 className="highlights-title">Article Highlights</h2>

      <div className="highlights-grid">
        {items.map((it) => (
          <article key={it.id} className="highlight-card">
            <img className="highlight-image" src={it.img} alt={it.title} />
            <div className="highlight-content">
              <h3 className="highlight-heading">{it.title}</h3>
              <p className="highlight-text">{it.description}</p>
              <a className="highlight-button" href="#">
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
