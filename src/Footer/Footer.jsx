import React from 'react';
import footerImg from '../img/contact.svg';
const Footer =() => {
    return(
        <footer>
            <div className="contact" id="contact">
                <img src={footerImg}></img>
                <div className="form">
                <h2>Contact Us</h2>
                    <form>
                        <input type="text" id="Yname" name="yourname" placeholder="Please Enter Your Name..."></input>
                        <input type="text" id="Email" name="yourmail" placeholder="Please Enter Your Email..."></input>
                        <input type="text" id="msg" name="message" placeholder="Please Write Your Message..."></input>
                        <input type="submit" id="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
            <h2 className="copyright">Designed and Developed By &copy;Kartik Prajapat</h2>
        </footer>
    );
}

export default Footer;