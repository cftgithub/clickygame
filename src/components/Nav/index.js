import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navSpace text-center">Your Score: {props.score}</div>
            <div className="navSpace text-center">{props.message}</div>
            <div className="navSpace text-center"> Top Score: {props.highScore}</div>
        </nav>
    );
}

export default Navbar;