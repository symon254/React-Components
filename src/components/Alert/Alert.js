import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Alert = ({ className, role, children }) => {
    return (
        <div className={className} role={role}>
            {children}
        </div>
    );
};
Alert.defaultProps = {
    children: "",
    className: "",
    role: "alert",
};

Alert.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    role: PropTypes.string,
};
export default Alert;
