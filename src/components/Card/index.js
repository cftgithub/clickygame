import React from "react";
import "./style.css";

function Card(props) {
    return (
        // <div className="img-card" onClick={() => props.click(props.id)}>
        //     <img className="fit" alt={props.name} src={props.image} />
        // </div>
        <div className="card">
            <div className="img-card" onClick={() => props.click(props.id)}>
                <img className="flower" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                        <strong>{props.name}</strong>
            </div>
        </div>
    );
}

export default Card;
