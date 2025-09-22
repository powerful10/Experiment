import React, { useState } from "react";
import "./article.css"
// ArticlePage.jsx
// Single-file React component (TailwindCSS utility classes assumed)
// Default export: ArticlePage
// Usage: <ArticlePage article={articleObject} related={relatedArray} />

export default function ArticlePage({
  article = null,
  related = [],
  onNavigate = (slug) => {},
}) {
  // fallback sample data
  const sample = {
    title: "Market Basics: Supply, Demand & Equilibrium",
    author: {
      name: "APonomics Team",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
    },
    date: "September 20, 2025",
    readingTime: "6 min read",
    hero: "https://images.unsplash.com/photo-1506976785307-8732e854ad94?w=1200&q=80",
    tags: ["economics", "markets", "basics"],
    content: `
## Introduction

Understanding supply and demand is the fundamental building block of economics. In this article we will walk through core ideas with visual examples, simple math and practical intuition.

### Supply

Supply is the quantity of a good sellers are willing to provide at each price.

### Demand

Demand is the quantity buyers want at each price. When summed across buyers and sellers, we get a market equilibrium.

### Equilibrium

An equilibrium is where supply equals demand. Prices tend to move toward equilibrium when markets are competitive.

> Short, clear sections help scanning. Use the table of contents to jump around.
    `,
  };

  const post = article || sample;
  const [showToc, setShowToc] = useState(true);
  const [comments, setComments] = useState([
    { id: 1, name: "Amina", text: "Great primer — thanks!", date: "Sep 19, 2025" },
  ]);
  const [commentText, setCommentText] = useState("");

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    const next = {
      id: Date.now(),
      name: "Guest",
      text: commentText.trim(),
      date: new Date().toLocaleDateString(),
    };
    setComments([next, ...comments]);
    setCommentText("");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-tight">APonomics</h1>
          <nav className="space-x-4 text-sm text-slate-600">
            <button className="hover:underline" onClick={() => onNavigate("/")}>Home</button>
            <button className="hover:underline" onClick={() => onNavigate("/articles")}>Articles</button>
            <button className="hover:underline" onClick={() => onNavigate("/about")}>About</button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article column */}
        <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <img
            src={post.hero}
            alt={post.title}
            className="w-full h-56 object-cover rounded-lg mb-6"
          />

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-tight">{post.title}</h2>
              <div className="flex items-center gap-3 mt-2 text-sm text-slate-600">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-xs">{post.date} • {post.readingTime}</div>
                </div>
              </div>
            </div>
            <div className="space-x-2 text-sm">
              {post.tags.map((t) => (
                <span key={t} className="inline-block border rounded-full px-3 py-1 text-xs">#{t}</span>
              ))}
            </div>
          </div>

          <div className="prose max-w-none mt-6">
            {/* Render markdown-like content simply — replace with a markdown renderer if desired */}
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
              if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
              if (line.startsWith('> ')) return <blockquote key={i}>{line.replace('> ', '')}</blockquote>;
              if (line.trim() === '') return <p key={i} />;
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* Author box */}
          <div className="mt-8 border rounded-lg p-4 flex items-center gap-4">
            <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm text-slate-600">Writer · APonomics</div>
            </div>
            <div className="ml-auto text-sm text-slate-500">Share: <button className="ml-2 underline">Twitter</button> <button className="ml-2 underline">LinkedIn</button></div>
          </div>

          {/* Comments */}
          <section className="mt-8">
            <h3 className="text-lg font-semibold">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mt-3 flex gap-3">
              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button className="px-4 py-2 bg-slate-800 text-white rounded-lg">Post</button>
            </form>

            <div className="mt-4 space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="bg-slate-50 p-3 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.date}</div>
                  </div>
                  <div className="text-sm mt-1">{c.text}</div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <strong>Table of contents</strong>
              <button
                className="text-sm text-slate-500"
                onClick={() => setShowToc((s) => !s)}
              >
                {showToc ? 'Hide' : 'Show'}
              </button>
            </div>
            {showToc && (
              <ol className="mt-3 text-sm list-decimal ml-5 text-slate-700">
                <li>Introduction</li>
                <li>Supply</li>
                <li>Demand</li>
                <li>Equilibrium</li>
              </ol>
            )}
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <strong>Related</strong>
            <ul className="mt-3 space-y-3">
              {(related.length ? related : [
                { id: 'supply', title: 'Why supply shifts occur', slug: 'supply-shifts' },
                { id: 'demand', title: 'Demand curves explained', slug: 'demand-curves' },
              ]).map((r) => (
                <li key={r.id}>
                  <button onClick={() => onNavigate(r.slug)} className="text-left w-full">
                    <div className="text-sm font-medium">{r.title}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm text-sm">
            <strong>Newsletter</strong>
            <p className="mt-2 text-slate-600">Get short weekly economics reads from APonomics.</p>
            <form className="mt-3 flex gap-2">
              <input placeholder="Email" className="flex-1 border rounded-lg px-3 py-2 text-sm" />
              <button className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm">Subscribe</button>
            </form>
          </div>
        </aside>
      </main>

      <footer className="mt-12 border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-600">© APonomics — educational economics content</div>
      </footer>
    </div>
  );
}
