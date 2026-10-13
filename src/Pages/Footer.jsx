import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerbox">
        <p className="footer-content">
          © 2026 Ashish Tiwari. All rights reserved. Designed & Built with ❤️
          using React.{" "}
        </p>
      </div>
      {/* // mobile footer */}
      <div className="mobile-footerbox">
        <p className="mobilefooter-content">
          © 2026 Ashish Tiwari. All rights reserved. Designed & Built with ❤️
          using React. <p style={{ color: "white" }}> Thank you</p>
        </p>
      </div>
    </>
  );
};

export default Footer;
