import React from "react";
import Button from "./Buttons";
function Card({ title, body }) {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-body">{body}</div>
                <Button children="success" styleClass="btn-success" />
                <br />
                <br />
                <Button children="warning" styleClass="btn-warning" />
                <br />
                <br />
                <Button children="info" styleClass="btn-info" />
                <br />
                <br />
                <Button children="primary" styleClass="btn-primary" />
                <br />
                <br />
                <Button children="secondary" styleClass="btn-secondary" />
                <br />
                <br />
                <Button children="default" styleClass="btn-default" />
                <br />
                <br />
            </div>
        </div>
    );
}

export default Card;
