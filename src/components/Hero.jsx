// src/Hero.jsx
import "./Hero.css";
import heroImage from "./assets/image.jpg"; // <-- replace with your own image

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to APonomics!</h1>
        <p className="hero-subtitle">
          Economics is not just a subject — it’s the language of decision-making
          in our world. At APonomics, we simplify complex ideas, highlight key
          concepts, and guide you step by step to succeed in AP Economics while
          preparing you for bigger opportunities ahead.
        </p>
      </div>
    </section>
  );
}

export default Hero;
