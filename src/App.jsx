// src/App.jsx
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import ArticlesPage from "./pages/articles/articlesPage.jsx"
import SignIn from "./pages/sign/SignIn.jsx";
import SignUp from "./pages/sign/SignUp.jsx";
import RecoverPassword from "./pages/sign/RecoverPassword.jsx";
// import Image1 from "..//src/assets/download.jpg"
// import Image2 from "..//src/assets/image.jpg"
// import Image3 from "..//src/assets/download.png"

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


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
            <img src={logo} alt={t("app.logoAlt")} className="app-logo" />
            <h1 className="app-title">{t("app.title")}</h1>
          </div>
      
          <select className="select" onChange={(e) =>
            changeLanguage(e.target.value)}>
              <option value="en">en</option>
              <option value="uz">uz</option>
            </select>
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
              {t("app.nav.home")}
            </Link>

            {/* Economics dropdown */}
            <div className={`dropdown ${isMobile && economicsOpen ? "open" : ""}`}>
              <button
                className="dropbtn"
                onClick={() => isMobile && setEconomicsOpen((s) => !s)}
                aria-expanded={isMobile ? !!economicsOpen : undefined}
              >
                {t("app.nav.economics")} <span className="arrow" aria-hidden="true" />
              </button>

              <div className="dropdown-content" role="menu">
                <Link onClick={closeNav} to="/economics/conceptCovers">
                {t("app.nav.concept_covers")} 
                </Link>
                <Link onClick={closeNav} to="/economics/notebook">
                  {t("app.nav.notebook")}
                </Link>
                <Link onClick={closeNav} to="/economics/opportunities">
                  {t("app.nav.opportunities")}
                </Link>
                <Link onClick={closeNav} to="/economics/podcasts">
                  {t("app.nav.podcasts")}
                </Link>
              </div>
            </div>

            <Link onClick={closeNav} to="/articles">
              {t("app.nav.articles")}
            </Link>

            {/* About dropdown */}
            <div className={`dropdown ${isMobile && aboutOpen ? "open" : ""}`}>
              <button
                className="dropbtn"
                onClick={() => isMobile && setAboutOpen((s) => !s)}
                aria-expanded={isMobile ? !!aboutOpen : undefined}
              >
                {t("app.nav.about")} <span className="arrow" aria-hidden="true" />
              </button>
              <div className="dropdown-content" role="menu">
                <Link onClick={closeNav} to="/about/aboutUs">
                  {t("app.nav.about_us")}
                </Link>
                <Link onClick={closeNav} to="/about/ourTeam">
                  {t("app.nav.our_team")}
                </Link>
                
              </div>
            </div>
            <Link to="/signin" style={{ marginRight: "20px", color:"white" }}>Sign In</Link>
            <Link to="/signup" style={{color:"white"}}>Sign Up</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Articles />
                <CompletedEvents />
                <Volunteering />
                <ScrollButton />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/recover" element={<RecoverPassword />} />
          <Route path="/articles" element={<ArticlesPage />} />
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
