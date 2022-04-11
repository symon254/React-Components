import PropTypes from "prop-types";
const Button = ({ children, onClick, styleClass, startIcon, endIcon }) => {
    return (
        <div>
            <button onClick={onClick} className={`btn ${styleClass}`}>
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
