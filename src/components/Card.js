import React from "react";
import Button from "./Buttons";
import { FcStart } from "react-icons/fc";
import { GiStopSign } from "react-icons/gi";
function Card({ title, body }) {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-body">{body}</div>
                <Button children="success" styleClass="btn-success" />

                <Button children="warning" styleClass="btn-warning" />

                <Button children="info" styleClass="btn-info" />

                <Button children="primary" styleClass="btn-primary" />

                <Button children="secondary" styleClass="btn-secondary" />

                <Button children="default" styleClass="btn-default" />

                <Button
                    startIcon={<FcStart />}
                    children="mimi"
                    styleClass="btn-default"
                />
                <Button
                    children="mimi"
                    endIcon={<GiStopSign />}
                    styleClass="btn-default"
                />

                <br />
                <br />
            </div>
        </div>
    );
}

export default Card;
