import React from "react";
import "./aboutUs.css";

const About = () => {
  return (
    <section className="about-page">
      <h2 className="page-title">About Us</h2>
      <p className="page-sub">The story behind APonomics</p>

      <div className="about-content">
        <p>
          Welcome to <strong>APonomics</strong>, a platform built by students,
          for students. Our mission is to make economics easier, clearer, and
          more engaging for learners everywhere.
        </p>
        <p>
          We started this project because we believe economics should not feel
          like a barrier but rather a tool to understand the world. From supply
          and demand to global trade, our articles and resources break down
          concepts into simple, practical insights.
        </p>
        <p>
          Our long-term goal is to grow APonomics into a supportive community of
          learners, where students can prepare for exams, explore real-world
          cases, and share knowledge freely.
        </p>
      </div>
    </section>
  );
};

export default About;
