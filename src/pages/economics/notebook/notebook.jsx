// src/Notebook.jsx
import React from "react";
import "./Notebook.css";
import bgImage from "@assets/photo_2025-09-27_08-49-01.jpg"; // put your image in src/ and name it notebook.jpg

export default function Notebook() {
  return (
    <div className="notebook-split">
      <aside className="left">
        <div className="left-inner">
          <div className="vertical-title">Uzbek economics</div>

          <h1 className="headline">The Notebook</h1>

          <p className="sub">
            All the knowledge you need, condensed into note form. Clean layout,
            printable-friendly, quick to scan.
          </p>

          <a className="cta" href="#read">
            Read the Notebook
          </a>
        </div>
      </aside>

      <main
        className="right"
        style={{ backgroundImage: `url(${bgImage}) ` }}
        role="img"
        aria-label="Close-up of a notebook and pencil"
      >
        <div className="overlay">
          <h2 className="page-title">The Notebook</h2>
          <p className="page-sub">
            A close-up notebook aesthetic with soft lighting — great for study
            or notes landing pages.
          </p>
        </div>
      </main>
    </div>
  );
}