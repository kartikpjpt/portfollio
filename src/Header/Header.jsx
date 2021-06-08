import React from "react";
import headerImageRed from '../img/illustration-red.svg';
import baloon from '../img/baloon.svg';
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={headerImageRed} className="header-image"/>
        <div className="header__sub">
            <h1 className="title">Hello.</h1>
            <p className="content">
            I am a 23 years old passionate <span className="full-stack">Fullstack Web Developer</span> from
            Jodhpur, India who enjoys desigining & building creative and innovative websites. Very positive and highly
            energetic person with a stronger focus on the Fullstack technologies.
            Currently, I am pursuing <span className="clg">Electronics and Computer Engineering from MBM Engineering College,Jodhpur.</span>
            </p>
            <div className="animated-content">
                <img src={baloon} className="baloon"/>
            </div>
        </div>
            
      </div>
    </>
  );
};
export default Header;
