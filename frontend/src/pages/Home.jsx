import React from "react";
import "./Home.css"; // Custom CSS for exact styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          <a className="navbar-brand" href="#">SPARKHAUS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
            </ul>
            <a href="#" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h1 className="main-title">IGNITE THE STORY<br />SHAPE THE LEGACY</h1>
        <p className="main-subtitle">
            Create experiences, connect audiences and spark ideas that drive your brand forward
        </p>
        <button className="start-project">Start Project &rarr;</button>
    </section>

      {/* Showcase Section */}
      <section className="showcase">
        <h2>Showcase</h2>
        <p>Crafting Digital Success Stories, One Project at a Time</p>
        <div className="showcase-card">
            <div className="project-image"></div>
            <div className="project-info">
            <h3>Doctor of Bat</h3>
            <span>Website</span>
            </div>
        </div>
        </section>
      {/* Services Section */}
      <section className="services">
        <h2>Services</h2>
        <div className="d-grid gap-3">
            <button className="btn btn-outline-light">Web Design & Development &rarr;</button>
            <button className="btn btn-outline-light">Branding &rarr;</button>
            <button className="btn btn-outline-light">Social Media Management &rarr;</button>
        </div>
        </section>

      {/* Contact Section */}
        <section className="contact">
        <h2>Speak with us if you'd like to tell your story</h2>
        <p>Seems intriguing? Hop on that call</p>
        <button className="get-in-touch">Get in Touch &rarr;</button>
        <div className="mt-4">
            <p>Email: sparkhausdigital@gmail.com</p>
            <p>Phone: +94 777867920, +94 711631003</p>
        </div>
        </section>

    </div>
  );
};

export default Home;
