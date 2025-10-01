import React from "react";
import "./team.css";

import Member1 from "@assets/member1.jpg";
import Member2 from "@assets/member2.jpg";
import Member3 from "@assets/member3.jpg";

const Team = () => {
  const team = [
    {
      name: "Oybek",
      role: "Frontend Developer",
      bio: "Passionate about clean design and smooth user experiences, building the APonomics interface.",
      img: Member1,
    },
    {
      name: "Friend’s Name",
      role: "Backend Developer",
      bio: "Focused on building APIs, databases, and making sure APonomics runs smoothly under the hood.",
      img: Member2,
    },
    {
      name: "Advisor / Mentor",
      role: "Project Guide",
      bio: "Providing direction, feedback, and ensuring the team stays aligned with the project vision.",
      img: Member3,
    },
  ];

  return (
    <section className="team-page">
      <h2 className="page-title">Our Team</h2>
      <p className="page-sub">The people behind APonomics</p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
