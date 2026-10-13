import React, { useState } from "react";
import "./Project.css";
import Projectcard from "../Components/Projectcard";
import { Link } from "react-router-dom";

const array = [
  {
    Image: "css.png",
    Title: "Ecommmerce Website",
    Description: " This is an E-Commerce Website",
    Language: " HTML,CSS, JS, REACT",
    Button: "Live Demo",
  },
  {
    Image: "js.png",
    Title: "Todo App",
    Description: "This is a Todo Application",
    Language: "HTML, CSS, JS, REACT",
    Button: "Live Demo",
  },
  {
    Image: "portfolio.jpg",
    Title: "Portfolio",
    Description: "This is my Portfolio Website",
    Language: "HTML, CSS, REACT",
    Button: "Live Demo",
  },
  {
    Image: "js.png",
    Title: "Portfolio",
    Description: "This is my Portfolio Website",
    Language: "HTML, CSS, REACT",
    Button: "Live Demo",
  },
  {
    Image: "js.png",
    Title: "Portfolio",
    Description: "This is my Portfolio Website",
    Language: "HTML, CSS, REACT",
    Button: "Live Demo",
  },
];
const Project = () => {
  const [projectShow, setProjectshow] = useState(false);
  const newArray = projectShow ? array : array.slice(0, 4);

  return (
    <div className="Projectspace" id="project">
      <div className="title">
        <h3> Projects </h3>
        <button
          className="project-btn"
          onClick={() => setProjectshow(!projectShow)}
        >
          {projectShow ? "show less" : "show all"}{" "}
        </button>
      </div>
      <hr /> <br />
      <div className="AllProjects">
        {newArray.map((Item, Index) => (
          <Projectcard
            key={Index}
            Image={Item.Image}
            Title={Item.Title}
            Description={Item.Description}
            Language={Item.Language}
            Button={Item.Button}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
