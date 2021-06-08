import React from "react";
import cpp from "../img/cpp.png";
import skillImg from "../img/skill.svg";
const Skills = () => {
  return (
    <>
      <div className="skills" id="skill">
        
        <div className="title-box">
        <img src={skillImg} alt="skills title" className="skill-img"/>
          <h2 className="heading">My Skills</h2>
          
        </div>
        <h2 className="items-title">Languages and Frameworks</h2>
        <div className="skills__items">
          <i className="fab fa-html5" title="HTML 5"></i>
          <i className="fab fa-css3-alt" title="CSS 3"></i>
          <i className="fab fa-sass" title="Sass,SCSS"></i>
          <i className="fab fa-js" title="Javascript"></i>
          <i className="fas fa-database fab" title="MongoDB"></i>
          <i className="fab fa-react" title="React.js"></i>
          <i className="fab fa-node" title="Node.js"></i>
          <span className="fab facpp">
            <img src={cpp} />
          </span>
        </div>
        <h2 className="items-title">Tools</h2>
        <div className="skills__items">
          <i className="fas fa-terminal fab" title="terminal"></i>
          <i className="fab fa-npm" title="npm"></i>
          <i className="fab fa-github" title="github"></i>
        </div>
      </div>
    </>
  );
};

export default Skills;
