import React from "react";
import projectImage from "../img/projects.svg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";

const Projects = () => {
  return (
    <div className="pro-container" id="projects">
      <div className="pro-container__head">
        <img src={projectImage} alt="project-title" className="proj-img" />
        <h2 className="heading">Projects</h2>
        <div className="pro_boxes">
        
          <div className="box">
            <img src={img1} alt="title"></img>
            <div className="box__content">
              <a href="https://randomquotestweet.netlify.app/" className="box-title" target="_blank">Random Quotes Website</a>
              <p className="box-content">This website fetches the random quotes using an API and there is an option available too, to tweet that quote.
              <br></br>In this project I have used HTML5, CSS3, Javascript and fetch API.<br></br></p>
              
            </div>
          </div>
          
          <div className="box">
            <img src={img2} alt="title"></img>
            <div className="box__content">
              <a href="https://scrollinfinity.netlify.app/" className="box-title" target="_blank">Infinite Images Scrolling </a>
              <p className="box-content"> This website fethces images from UNSPLASH.ORG and as you scroll it would keep loading random images.<br></br>In this project I have used HTML5, CSS3, Javascript and fetch API.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
