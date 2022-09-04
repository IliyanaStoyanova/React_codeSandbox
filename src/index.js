import React from "react";
import ReactDOM from "react-dom";

const name = "Iliyana";
const currentDate = new Date().getFullYear();
ReactDOM.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright {currentDate}</p>
    </div>,
    document.getElementById("root")
);