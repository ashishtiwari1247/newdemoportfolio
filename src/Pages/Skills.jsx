import React, { useState } from "react";
import Skillcard from "../Components/Skillcard";
import "./Skills.css";

const array = [
  {
    Image: "html.png",
    name: "HTML",
  },
  {
    Image: "css.png",
    name: "CSS",
  },
  {
    Image: "js.png",
    name: "JS",
  },
  {
    Image: "react.jpg",
    name: "REACT",
  },
  {
    Image: "express.png",
    name: " ExpressJS",
  },

  {
    Image: "node.png",
    name: "NODE",
  },
  {
    Image: "mongo.jpg",
    name: "MONGO DB",
  },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const newArray = showAll ? array : array.slice(0, 5);

  return (
    <div className="container" id="skills">
      <div className="title">
        <h3 color="black"> Skills</h3>
        <button className="showmore" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <hr />
      <div className="skill">
        {newArray.map((item, index) => (
          <Skillcard key={index} Image={item.Image} Name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
