import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../assets/images/article1.jpg";
import Image2 from "../assets/images/article2.jpg";
import Image3 from "../assets/images/article3.jpg";
import "./Articles.css";

const Articles = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const focus = query.get("focus");

  const articles = [
    {
      id: "supply-demand",
      title: "Supply & Demand Basics",
      description:
        "A clear primer on how markets find prices and quantities — essential for APonomics learners.",
      img: Image1,
      link: "/articles?focus=supply-demand",
    },
    {
      id: "global-trade",
      title: "Global Trade Simplified",
      description:
        "Short, real-world cases that show how trade shapes economies and creates opportunities.",
      img: Image2,
      link: "/articles?focus=global-trade",
    },
    {
      id: "exam-strategies",
      title: "Exam Strategies",
      description:
        "Practical tips to help students prepare and perform confidently on economics exams.",
      img: Image3,
      link: "/articles?focus=exam-strategies",
    },
  ];

  return (
    <section className="articles-page container">
      <h2 className="articles-title">Articles</h2>

      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`article-card ${
              focus === article.id ? "highlight" : ""
            }`}
          >
            <img src={article.img} alt={article.title} className="article-img" />
            <div className="article-content">
              <h3 className="article-card-title">{article.title}</h3>
              <p className="article-card-text">{article.description}</p>
              <Link to={article.link} className="article-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
