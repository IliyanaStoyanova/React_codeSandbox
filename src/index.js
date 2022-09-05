import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {add, multiply, subtract, divide} from "./calcolator";
ReactDOM.render(
    // <App />,
    <div>
        {add(2, 3)},
        {multiply(2, 3)},
        {subtract(6, 3)},
        {divide(6, 2)}
    </div>,
    document.getElementById("root")
);