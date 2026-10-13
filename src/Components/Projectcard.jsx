import React from "react";
import "./Projectcard.css";

const Projectcard = ({ Image, Title, Description, Language, Button }) => {
  return (
    <div className="projectbox">
      <div className="projectdesign">
        <h1>
          <img src={Image} alt="name" className="image" />
        </h1>
        <h2>{Title} </h2>
        <h4> {Description} </h4>
        <p> {Language}</p>
        <button> {Button}</button>
      </div>
    </div>
  );
};

export default Projectcard;
