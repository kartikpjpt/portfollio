import React from 'react';
import hireMe from '../img/hire.svg';
const Hire = () => {
    return(
        <div className="hire-container" id="hire">
            <div className="hire-me">
                <img src={hireMe} alt="Hire Me" className="image-hire"/>
                <div className="content">

                    <div className="fiverr">
                    <h2>On Fiverr</h2>
                    <h3>You can find me here<br></br> <a href="https://www.fiverr.com/kartik_28" target="_blank">kartik_28</a></h3>
                    </div>
                    
                    <div className="resume">
                        <span><a href="#">Download resume</a></span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Hire;