import React from "react";
import "./Skillcard.css";

const Skillcard = ({ Image, Name }) => {
  return (
    <div className="skillbox">
      <div className="skillcard">
        <img src={"/" + Image} alt="{name}" />
        <p>{Name}</p>
      </div>
    </div>
  );
};

export default Skillcard;
