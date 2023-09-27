import React from "react";
import "./CardPequeno.css";

function CardPequeno (props) {
    return (
        <div>
            <div className="smallcard-container">
            <p><strong>EMAIL: </strong>{props.email}</p>
            </div>
            <div className="smallcard-container">
            <p><strong>ENDEREÇO: </strong>{props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno