import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar(){
    return(
        <div id="container">
            <Link to="/" id="tool">QueryPulse</Link>
            <Link to="/" id="home">Home</Link>
            <Link to="/about" id="about">About</Link>
        </div>
    );
}

export default Navbar