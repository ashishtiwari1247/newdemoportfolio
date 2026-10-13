import React from "react";
import "./About.css";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="aboutbox" id="about">
      <div className="about">
        <h2>
          <CgProfile /> About me <br /> <br />{" "}
        </h2>
        <p>
          {" "}
          I'm a passionate Full Stack Developer with <br />
          expertise in the MERn stack. I love building <br />
          clean, user-friendly, and efficient web <br />
          application{" "}
        </p>{" "}
        <br />
        <a
          href="/ASHISH TIWARI RESUME.pdf"
          download="ASHISH TIWARI RESUME.pdf"
          className="b0"
        >
          Download CV
        </a>
        <br />
      </div>

      <div className="intro">
        <div className="info">
          <FaUser className="icon" />
          <span>Name: Ashish Tiwari</span>
        </div>

        <div className="info">
          <MdEmail className="icon" />
          <span>Email: ashishtiwariap78@gmail.com</span>
        </div>

        <div className="info">
          <FaLocationDot className="icon" />
          <span>Location: Marihan, Mirzapur, Uttar Pradesh, India</span>
        </div>

        <div className="info">
          <MdOutlineWork className="icon" />
          <span>Experience: Fresher</span>
        </div>

        <div className="info">
          <FaCheckCircle className="icon" />
          <span>
            Availability: <span style={{ color: "green" }}>Open To Work</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
