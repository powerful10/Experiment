// src/Volunteering.jsx
import "./Volunteering.css";

function Volunteering() {
  return (
    <section className="volunteering-section container" aria-label="Opportunity for volunteering">
      <h2 className="volunteering-title">Opportunity for volunteering</h2>
      <p className="volunteering-subtext">
        Fill out the form below to become part of our team.
      </p>

      <form className="volunteering-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" name="firstName" required />
          <input type="text" placeholder="Last Name" name="lastName" required />
        </div>
        <input type="email" placeholder="Email" name="email" required />
        <textarea
          placeholder="Write about your abilities and skills"
          name="skills"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
}

export default Volunteering;
