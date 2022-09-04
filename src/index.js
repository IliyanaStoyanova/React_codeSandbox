import React from "react";
import ReactDOM from "react-dom";

// const date = new Date(2022, 4, 9, 19);
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

ReactDOM.render(
    <div>
        <h1 className="heading" style={customStyle}>{greeting}</h1>
    </div>,
    document.getElementById("root")
);