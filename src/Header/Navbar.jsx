import React, { useEffect, useState } from 'react';
import myImage from '../img/me.PNG';

const Navbar = () => {
    // this state is for hambrgure menu
    const [isActive,setIsActive] = useState(true);
    // this state is for the menu content 
    const [menu,setMenu] = useState(true);
    // this state is for getting the resized width of the window
    const [width,setWidth] = useState(window.innerWidth);

    // A function to get check if width is less than 768 then activates hamburger menu
    const change = () => {
        if(width<=768) {
        setIsActive(!isActive);
        setMenu(!menu);
        console.log("hello");
        } 
    }
    // This function gets the resized width everytime you resize
    const updatedWidth = () => {
        setWidth(window.innerWidth); 
    }

    // taking the benifit of useEffect to get the resized window width using evenetListener
    useEffect(() => {
        window.addEventListener('resize', updatedWidth);
        if(width > 769 && menu===false) {
            setIsActive(true);
            setMenu(true);
        }
        return(() => window.removeEventListener("resize",updatedWidth));
    }); 
    
    // rendering the content
    return(
        <>
            <nav className="navbar">
                <h1 className="navbar__logo">Kartik Prajapat.</h1>
                <img src={myImage} className="my-image"/>
                {/* it would diplay the menu on click */}
                <div className= {`menu-container ${isActive ? "" : "change"}`} onClick={change} >
                    <div className="top"></div>
                    <div className="mid"></div>
                    <div className="bottom"></div>
                </div>
                {/* changin the menu class for items to be in columns and below the navbar */}
                <ul className={` ${menu? "navbar__menu-items" : "navbar__menu-items-2"}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#hire">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;