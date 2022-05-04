import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Alert = ({ className, role, children, width }) => {
    return (
        <div className={className} role={role} style={{ width: width }}>
            {children}
        </div>
    );
};
Alert.defaultProps = {
    children: "",
    className: "",
    width: "300px",
    role: "alert",
};

Alert.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    role: PropTypes.string,
};
export default Alert;
