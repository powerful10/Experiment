import React from "react";
import "./team.css";

import Member1 from "@assets/member1.jpg";
import Member2 from "@assets/member2.jpg";
import Member3 from "@assets/member3.jpg";

const Team = () => {
  const team = [
    {
      name: "1st member",
      role: "who?",
      bio: "bio?",
      img: Member1,
    },
    {
      name: "2nd member",
      role: "who?",
      bio: "bio?",
      img: Member2,
    },
    {
      name: "3rd member",
      role: "who?",
      bio: "bio?",
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
