import React from "react";
import logo from "../images/Logo .svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact information</h3>
                    <ul>
                        <li> Address: <br/> XXX, XXXX, XXXX</li>
                        <li> Phone: <br/> XXX XXX XXX</li>
                        <li> Email: <br/> XXXX@XXXX.XX</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;