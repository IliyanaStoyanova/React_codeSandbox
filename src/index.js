import React from "react";
import ReactDOM from "react-dom";

const fName = "Iliyana";
const lName = "Stoyanova";
const luckNum = 7
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is {luckNum}</p>
  </div>,
  document.getElementById("root")
);
