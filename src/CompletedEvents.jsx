// src/CompletedEvents.jsx
import "./CompletedEvents.css";
import image1 from "./assets/download (1).jpg";
import image2 from "./assets/download.jpg";
import image3 from "./assets/download.png";
import image4 from "./assets/image.jpg";
import image5 from "./assets/logo.jpg";

const events = [
  {
    id: 1,
    title: "Eponymous Workshop",
    description: "Hands-On Workshop on Supply and Demand Principles for AP Students",
    date: "2025-10-12",
    location: "Tashkent",
    image: image1,
  },
  {
    id: 2,
    title: "Global Trade Conference",
    description: "Exploring international trade and economic policies",
    date: "2025-09-22",
    location: "Samarkand",
    image: image2,
  },
  {
    id: 3,
    title: "Economic Research Meetup",
    description: "Discussing recent economic studies and findings",
    date: "2025-11-05",
    location: "Nukus",
    image: image3,
  },
  {
    id: 4,
    title: "AP Economics Bootcamp",
    description: "Intensive training on macro and microeconomics",
    date: "2025-08-18",
    location: "Bukhara",
    image: image4,
  },
  {
    id: 5,
    title: "Finance & Investment Seminar",
    description: "Learn the basics of finance and investment strategies",
    date: "2025-12-01",
    location: "Tashkent",
    image: image5,
  },
];

// Function to pick `n` random events
function getRandomEvents(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function CompletedEvents() {
  const randomEvents = getRandomEvents(events, 3);

  return (
    <section className="completed-events container" aria-label="Completed events">
      <h2 className="events-title">Completed Events</h2>

      <div className="events-grid">
        {randomEvents.map((event) => (
          <article key={event.id} className="event-card">
            <img className="event-image" src={event.image} alt={event.title} />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-desc">{event.description}</p>
              <p className="event-info">
                <strong>Date:</strong> {event.date} <br />
                <strong>Location:</strong> {event.location}
              </p>
              <a className="event-button" href="#">
                Details
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CompletedEvents;
