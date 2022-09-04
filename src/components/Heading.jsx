import React from "react";

function Heading() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting = "Good ";
    let customStyle = {
        color: ""
    }
    if(currentTime < 12) {
        greeting += "Morning";
        customStyle.color = "red";
    }else if(currentTime < 18) {
        greeting += "Afternoon";
        customStyle.color = "green";
    }else {
        greeting += "Evening";
        customStyle.color = "blue";
    }
    return (
        <h1 className="heading" style={customStyle}>{greeting}</h1>
    )
}

export default Heading;