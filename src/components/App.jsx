// src/App.jsx
import { useState, useEffect } from "react";
import logo from "./assets/logo.jpg"; // keep your logo path
import "./App.css";
import Hero from "./Hero.jsx";
import Highlights from "./Highlights.jsx";
import CompletedEvents from "./CompletedEvents.jsx";
import Volunteering from "./Volunteering.jsx";
import Footer from "./Footer.jsx";
import ScrollButton from "./ScrollToTopButton.jsx"



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); //default dark mode
  const toggleMode = () =>
    setIsDarkMode((prev) => !prev);
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
    <>
    <div className={isDarkMode ?
      "dark-mode" : "light-mode"
    }>


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
          <a onClick={closeNav} href="#">
            Home
          </a>

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
              <a onClick={closeNav} href="#" role="menuitem">
                Notebook
              </a>
              <a onClick={closeNav} href="#" role="menuitem">
                Concept Covers
              </a>
              <a onClick={closeNav} href="#" role="menuitem">
                Opportunities
              </a>
              <a onClick={closeNav} href="#" role="menuitem">
                Podcasts
              </a>
            </div>
          </div>

          <a onClick={closeNav} href="#">
            Articles
          </a>

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
              <a onClick={closeNav} href="#" role="menuitem">
                About Us
              </a>
              <a onClick={closeNav} href="#" role="menuitem">
                Our Team
              </a>
            </div>
          </div>
        </nav>
        <button onClick={toggleMode} className="mode-toggle">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main>
        <Hero />
        <Highlights />
        <CompletedEvents />
        <Volunteering />
        <ScrollButton />
      </main>
      <Footer />
    </div>



    </>
  );
}

export default App;
