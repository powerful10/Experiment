import React from "react";
import "./opportunities.css";
import Books from "..//..//..//assets/books.webp"
import Courses from "..//..//..//assets/courses.webp"
import Competitions from "..//..//..//assets/competitions.webp"

const categories = [
  {
    id: "1",
    title: "Books",
    desc: "Dive into essential economics books and expand your knowledge base.",
    img: Books, // placeholder
    link: "#books",
  },
  {
    id: "2",
    title: "Courses",
    desc: "Find online and offline courses to strengthen your economics and tech skills.",
    img: Courses, // placeholder
    link: "#courses",
  },
  {
    id: "3",
    title: "Competitions",
    desc: "Participate in Olympiads, essay contests, and case challenges worldwide.",
    img: Competitions, // placeholder
    link: "#competitions",
  },
];

export default function Opportunities() {
  return (
    <div className="opp-wrap">
      <h1 className="opp-main-title">Opportunities</h1>
      <p className="opp-subtitle">For economists of all ages.</p>

      <div className="opp-grid">
        {categories.map((cat) => (
          <article key={cat.id} className="opp-card">
            <img src={cat.img} alt={cat.title} className="opp-img" />
            <div className="opp-body">
              <h2>{cat.title}</h2>
              <p>{cat.desc}</p>
              <a href={cat.link} className="opp-btn">
                Explore {cat.title}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
