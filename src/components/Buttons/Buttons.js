import PropTypes from "prop-types";
import React from "react";
const Button = ({
    children,
    onClick,
    styleClass,
    startIcon,
    endIcon,
    padding,
    width,
    backgroundColor,
    paddingLeft,
    paddingRight,
    margin,
    marginRight,
    marginLeft,
    marginTop,
    float,
}) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`btn ${styleClass}`}
                style={{
                    padding: padding,
                    margin: margin,
                    width: width,
                    backgroundColor: backgroundColor,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    marginRight: marginRight,
                    marginLeft: marginLeft,
                    float: float,
                    marginTop: marginTop,
                }}
            >
                {startIcon}
                {children}
                {endIcon}
            </button>
        </div>
    );
};
Button.defaultProps = {
    styleClass: "btn-primary",
};

Button.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
