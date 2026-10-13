import React from "react";
import "./Home.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      {/* Desktop section */}
      <div className="hero" id="home">
        <div className="content">
          <h1>
            Hi, I'm <br />
            Ashish <span className="name">Tiwari</span>
          </h1>

          <h5>Full Stack Developer (MERN)</h5>

          <p>
            I build Modern and Responsive
            <br />
            Web Application That solve Real World Problem
          </p>

          <div className="button">
            <a href="#project" className="b1">
              View Project
            </a>
            <a href="#contact" className="b2">
              Contact me
            </a>
          </div>

          <div className="link">
            <a href="#">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashish-tiwari-957a8a2aa/">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaSquareTwitter />
            </a>
            <a href="#">
              <FaSquareInstagram />
            </a>
          </div>
        </div>

        <div className="photo">
          <div className="profile">
            <img src="/profile.png" alt="Ashish Tiwari" />
          </div>
        </div>
      </div>

      {/* Mobile section — hero ke bahar */}
      <div className="mobile-hero" id="home">
        <div className="mobile-content">
          <h1>
            Hi, I'm <br />
            Ashish <span className="name">Tiwari</span>
          </h1>

          <h5>Full Stack Developer (MERN)</h5>

          <p>
            I build Modern and Responsive Web Application. <br />
            <span className="tagline">That solve Real World Problem </span>
          </p>

          <div className="button">
            <a href="#project" className="b1">
              View Project
            </a>
            <a href="#contact" className="b2">
              Contact me
            </a>
          </div>

          <div className="icons">
            <a href="#" className="svg">
              <FaSquareGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-tiwari-957a8a2aa/ "
              className="svg"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="svg">
              <FaSquareTwitter />
            </a>
            <a href="#" className="svg">
              <FaSquareInstagram />
            </a>
          </div>
        </div>

        <div className="mobile-photo">
          <img src="/profile.png" alt="Ashish Tiwari" />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
