import React from "react";
import "../../Assets/styles.css";

const Cards = ({ src, alt, title, des, price, Children }) => {
    return (
        <div className="wrapper">
            <div className="cardss">
                <div>
                    <img className="cardss__img" src={src} alt={alt} />
                </div>
                <div className="cardss__body">
                    <h2 className="cardss__title">{title}</h2>
                    <p className="cardss__description">{des}</p>
                    <h3 className="cardss__price">{price}</h3>
                    <button className="cardss__btn">{Children}</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
