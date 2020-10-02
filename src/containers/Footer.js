import React from "react";
import { Link } from "react-router-dom";
import Fac from "../Images/Facebook.svg";
import Ins from "../Images/instagram.svg";
import Pow from "../Images/Powered-by.svg";

const Footer = () => {
    return (
        <footer>
            <Link to="/" className="icon">
                <img src={Ins} alt="icon-Instagram" />
            </Link>
            <Link to="/" className="icon">
                <img src={Fac} alt="icon-Facebook" />
            </Link>

            <Link to="/" className="pow-left">
                <img src={Pow} alt="icon-Powered" />
            </Link>
        </footer>
    );
};

export default Footer;
