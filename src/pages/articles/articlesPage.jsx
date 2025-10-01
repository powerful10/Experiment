// src/pages/articles/articles.page.jsx
import { useState } from "react";
import "./articlesPage.css";

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence",
      content: `Artificial Intelligence (AI) has transformed industries from healthcare to finance. 
      In this article, we explore how AI is shaping the future and what opportunities 
      it brings for the next generation of developers and businesses.`,
    },
    {
      id: 2,
      title: "Why Learning Programming Early Matters",
      content: `Starting programming at a young age develops problem-solving skills 
      and logical thinking. From Python to JavaScript, coding empowers students 
      to create real-world projects and gain confidence in tech.`,
    },
    {
      id: 3,
      title: "The Future of Web Development",
      content: `With the rise of frameworks like React, Next.js, and Tailwind CSS, 
      web development is moving toward faster, more scalable, and highly interactive 
      applications. This article looks into trends for the coming years.`,
    },
  ];

  return (
    <div className="articles-page">
      <h1 className="page-title">All Articles</h1>
      {articles.map((article) => (
        <ArticleFull key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
}

// Collapsible Article Component
function ArticleFull({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="article-full">
      <div className="article-header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="article-heading">{title}</h2>
        <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="article-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
