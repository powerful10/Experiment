import React, { useState } from "react";
import "./podcasts.css";

const sampleEpisodes = [
  {
    id: "1",
    title: "Episode 01 — Building APonomics",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "We discuss the origins of APonomics, tech stack, and product decisions.",
    tags: ["tech", "react", "project"],
  },
  {
    id: "2",
    title: "Episode 02 — Frontend Tips",
    youtubeId: "9bZkp7q19f0",
    description:
      "Fast frontend tips: performance, Vite, and modern patterns.",
    tags: ["frontend", "vite", "performance"],
  },
  {
    id: "3",
    title: "Episode 03 — Career Advice",
    youtubeId: "3JZ_D3ELwOQ",
    description:
      "How to prepare university applications and build projects that stand out.",
    tags: ["career", "university"],
  },
];

export default function PodcastGrid({ episodes = sampleEpisodes }) {
  const [openVideo, setOpenVideo] = useState(null);

  function openEpisode(ep) {
    setOpenVideo(ep);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setOpenVideo(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="podcast-wrap">
      <h2 className="podcast-title">Podcast & Video Episodes</h2>
      <div className="podcast-grid">
        {episodes.map((ep) => (
          <article key={ep.id} className="pod-card">
            <button
              className="thumb-btn"
              onClick={() => openEpisode(ep)}
              aria-haspopup="dialog"
            >
              <img
                className="thumb-img"
                loading="lazy"
                alt={`${ep.title} thumbnail`}
                src={`https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                width="320"
                height="180"
              />
              <div className="overlay">
                <span className="play">▶</span>
              </div>
            </button>

            <div className="card-body">
              <h3 className="card-title">{ep.title}</h3>
              <p className="card-desc">{ep.description}</p>
              <div className="tag-row">
                {ep.tags?.map((t) => (
                  <span key={t} className="tag">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="card-actions">
                <a
                  className="yt-link"
                  href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open on YouTube
                </a>
                <button
                  className="mini-play"
                  onClick={() => openEpisode(ep)}
                  aria-label={`Play ${ep.title}`}
                >
                  Play
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {openVideo && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-inner">
            <header className="modal-head">
              <h3>{openVideo.title}</h3>
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
            </header>
            <div className="iframe-wrap">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${openVideo.youtubeId}?autoplay=1&rel=0`}
                title={openVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <button className="modal-backdrop" onClick={closeModal}></button>
        </div>
      )}
    </div>
  );
}
