import React from "react";
import MegAkheir from "../Images/MEGAKHEIR-Logo 1.svg";
import Vector from "../Images/Vector.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="vendor-left">
                <img src={Vector} alt="Vector" />
            </div>
            <div className="meg-center">
                <img src={MegAkheir} alt="MegAkheir" />
            </div>
        </nav>
    );
};

export default Navbar;
