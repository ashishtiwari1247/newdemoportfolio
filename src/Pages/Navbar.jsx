import React, { useState } from "react";
import "./Navbar.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="Navbox">
        <div className="logo">
          <img src="/profile.png" alt="Ashish Tiwari" />
        </div>

        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="/ASHISH TIWARI RESUME.pdf"
            download="ASHISH TIWARI RESUME.pdf"
            className="b0"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbox">
        <div className="logo">
          <img src="/profile.png" alt="Ashish Tiwari" />
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
        <br />
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="/ASHISH TIWARI RESUME.pdf"
            download="ASHISH TIWARI RESUME.pdf"
            className="download-now"
          >
            Download CV
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
