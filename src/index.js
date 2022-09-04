import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black",
};
customStyle.color = "blue";
ReactDOM.render(
    <div>
        <h1 style={customStyle}>My Favourite Foods</h1>
        <div>
            <img alt="random" src={img + "?grayscale"} />
            <img alt="potatoes" className="food-img" src="https://www.seriouseats.com/thmb/U4eRN44zNTpRDRG2W8DBMQH626s=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20211201-crispy-roasted-potatoes-vicky-wasik-45-d75608ce325e4ffbab665084eba642c8.jpg" />
            <img alt="tomatoes" className="food-img" src="https://www.lastingredient.com/wp-content/uploads/2021/08/marinated-cherry-tomatoes7-819x1024.webp" />
            <img alt="spaghetti" className="food-img" src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" />
        </div>
    </div>,
    document.getElementById("root")
);