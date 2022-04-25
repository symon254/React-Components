import React from "react";
import Cards from "../card/Card";
import Alert from "./Alert";

function AlertDisplay() {
    const Alerts = [
        {
            label: (
                <>
                    <Alert
                        className="alert alert-primary"
                        role="alert"
                        children="primary"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-secondary"
                        role="alert"
                        children="secondary"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-success"
                        role="alert"
                        children="success"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-danger"
                        role="alert"
                        children="danger"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-warning"
                        role="alert"
                        children="warning"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-info"
                        role="alert"
                        children="info"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-light"
                        role="alert"
                        children="light"
                    />
                </>
            ),
        },
        {
            label: (
                <>
                    <Alert
                        className="alert alert-dark"
                        role="alert"
                        children="dark"
                    />
                </>
            ),
        },
    ];
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    height="1035px"
                    header="Alert"
                    title="Alerts"
                    actions={Alerts}
                />
            </div>
        </div>
    );
}

export default AlertDisplay;
