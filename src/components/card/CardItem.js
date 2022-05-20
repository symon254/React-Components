import React from "react";

const CardItem = ({ header, title, contents }) => {
    return (
        <div className="card">
            <div className="card-header">{header}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{contents}</p>
            </div>
        </div>
    );
};

export default CardItem;
