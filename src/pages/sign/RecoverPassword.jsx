import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password recovery for:", email);
    // your friend will connect backend here
  };

  return (
    <div className="auth-container">
      <h2>Recover Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Enter your email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Send Recovery Link</button>

        <div className="auth-links">
          <p>
            Remembered your password?{" "}
            <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
