// src/App.jsx
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.jpg"; // keep your logo path
import "./App.css";
import Hero from "./Hero.jsx";
import CompletedEvents from "./CompletedEvents.jsx";
import Volunteering from "./Volunteering.jsx";
import Footer from "./Footer.jsx";
import ScrollButton from "./ScrollToTopButton.jsx";
import Articles from "./pages/articles/articles.jsx";
import AboutUs from "./pages/about/aboutUs/aboutUs.jsx";
import OurTeam from "./pages/about/ourTeam/ourTeam.jsx";
import ConceptCovers from "./pages/economics/conceptCovers/conceptCovers.jsx";
import Notebook from "./pages/economics/notebook/notebook.jsx";
import Opportunities from "./pages/economics/opportunities/opportunities.jsx";
import Podcasts from "./pages/economics/podcasts/podcasts.jsx";
import Image1 from "..//src/assets/download.jpg"
import Image2 from "..//src/assets/image.jpg"
import Image3 from "..//src/assets/download.png"

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [economicsOpen, setEconomicsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // detect mobile based on width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // reset dropdowns on desktop
  useEffect(() => {
    if (!isMobile) {
      setEconomicsOpen(false);
      setAboutOpen(false);
    }
  }, [isMobile]);

  const toggleNav = () => setNavOpen((s) => !s);
  const closeNav = () => {
    setNavOpen(false);
    setEconomicsOpen(false);
    setAboutOpen(false);
  };

  return (
    <Router>
      <div>
        <header className="app-header container">
          <div className="left-section">
            <img src={logo} alt="APonomics Logo" className="app-logo" />
            <h1 className="app-title">APonomics</h1>
          </div>

          {/* hamburger button */}
          <button
            className={`hamburger ${navOpen ? "active" : ""}`}
            onClick={toggleNav}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>

          {/* navigation */}
          <nav className={`app-nav ${navOpen ? "open" : ""}`}>
            <Link onClick={closeNav} to="/">
              Home
            </Link>

            {/* Economics dropdown */}
            <div className={`dropdown ${isMobile && economicsOpen ? "open" : ""}`}>
              <button
                className="dropbtn"
                onClick={() => isMobile && setEconomicsOpen((s) => !s)}
                aria-expanded={isMobile ? !!economicsOpen : undefined}
              >
                Economics <span className="arrow" aria-hidden="true" />
              </button>

              <div className="dropdown-content" role="menu">
                <Link onClick={closeNav} to="/economics/conceptCovers">
                  Concept Covers
                </Link>
                <Link onClick={closeNav} to="/economics/notebook">
                  Notebook
                </Link>
                <Link onClick={closeNav} to="/economics/opportunities">
                  Opportunities
                </Link>
                <Link onClick={closeNav} to="/economics/podcasts">
                  Podcasts
                </Link>
              </div>
            </div>

            <Link onClick={closeNav} to="/articles">
              Articles
            </Link>

            {/* About dropdown */}
            <div className={`dropdown ${isMobile && aboutOpen ? "open" : ""}`}>
              <button
                className="dropbtn"
                onClick={() => isMobile && setAboutOpen((s) => !s)}
                aria-expanded={isMobile ? !!aboutOpen : undefined}
              >
                About <span className="arrow" aria-hidden="true" />
              </button>
              <div className="dropdown-content" role="menu">
                <Link onClick={closeNav} to="/about/aboutUs">
                  About Us
                </Link>
                <Link onClick={closeNav} to="/about/ourTeam">
                  Our Team
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                {/* === Articles Section inserted here === */}
    <section className="articles-preview container">
  <h2 className="articles-title">Articles</h2>
  <h3 className="featured-title">Featured Articles</h3>

  <div className="articles-grid">
    <div className="article-box">
      <img
        src = {Image1}
        alt="Supply & Demand"
        className="article-img"
      />
      <h3>Supply & Demand Basics</h3>
      <p>
        A clear primer on how markets find prices and quantities —
        essential for APonomics learners.
      </p>
      <Link
        to="/articles?focus=supply-demand"
        className="article-btn"
      >
        Read More
      </Link>
    </div>

    <div className="article-box">
      <img
        src={Image2}
        alt="Global Trade"
        className="article-img"
      />
      <h3>Global Trade Simplified</h3>
      <p>
        Short, real-world cases that show how trade shapes economies
        and creates opportunities.
      </p>
      <Link
        to="/articles?focus=global-trade"
        className="article-btn"
      >
        Read More
      </Link>
    </div>

    <div className="article-box">
      <img
        src={Image3}
        alt="Exam Strategies"
        className="article-img"
      />
      <h3>Exam Strategies</h3>
      <p>
        Practical tips to help students prepare and perform confidently
        on economics exams.
      </p>
      <Link
        to="/articles?focus=exam-strategies"
        className="article-btn"
      >
        Read More
      </Link>
    </div>
  </div>

  <div className="articles-more">
    <Link to="/articles" className="article-btn">
      More
    </Link>
  </div>
    </section>

                {/* === End Articles Section === */}

                <CompletedEvents />
                <Volunteering />
                <ScrollButton />
              </>
            }
          />

          <Route path="/articles" element={<Articles />} />
          <Route path="/about/aboutUs" element={<AboutUs />} />
          <Route path="/about/ourTeam" element={<OurTeam />} />
          <Route path="/economics/conceptCovers" element={<ConceptCovers />} />
          <Route path="/economics/notebook" element={<Notebook />} />
          <Route path="/economics/opportunities" element={<Opportunities />} />
          <Route path="/economics/podcasts" element={<Podcasts />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
