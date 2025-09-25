// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.jpg"; // keep your logo path
import "./App.css";
import Hero from "./Hero.jsx";
import Highlights from "./Highlights.jsx";
import CompletedEvents from "./CompletedEvents.jsx";
import Volunteering from "./Volunteering.jsx";
import Footer from "./Footer.jsx";
import ScrollButton from "./ScrollToTopButton.jsx";
import Articles from "./pages/articles/articles.jsx"; // <-- import Articles page
import AboutUs from "./pages/about/aboutUs/aboutUs.jsx"
import OurTeam from "./pages/about/ourTeam/ourTeam.jsx"
import ConceptCovers from "./pages/economics/conceptCovers/conceptCovers.jsx"
import Notebook from "./pages/economics/notebook/notebook.jsx"
import Opportunities from "./pages/economics/opportunities/opportunities.jsx"
import Podcasts from "./pages/economics/podcasts/podcasts.jsx"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // default dark mode
  const toggleMode = () => setIsDarkMode((prev) => !prev);
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

  // if we switch to desktop, ensure mobile-only open states are cleared
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
    <HashRouter>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
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
          <button onClick={toggleMode} className="mode-toggle">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlights />
                <CompletedEvents />
                <Volunteering />
                <ScrollButton />
              </>
            }
          />
          {/* Routes */}

          <Route path="/articles" element={<Articles />} />

          <Route path="/about/aboutUs" element={<AboutUs />} />

          <Route path="/about/ourTeam" element={<OurTeam />} /> 

          <Route path="/economics/conceptCovers" element={<ConceptCovers />} />

          <Route path="/economics/notebook" element={<Notebook />}/>

          <Route path="/economics/opportunities" element={<Opportunities />}/>

          <Route path="/economics/podcasts" element={<Podcasts />}/>

          
          {/* Routes */}
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
