import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navSpace text-center">Clicky Game</div>
            <div className="navSpace text-center">{props.message}</div>
            <div className="navSpace text-center">Score: {props.score} Highscore: {props.highScore}</div>
        </nav>
    );
}

export default Navbar;