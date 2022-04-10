import PropTypes from "prop-types";

const Button = ({ children, onClick, styleClass }) => {
    return (
        <button onClick={onClick} className={`btn ${styleClass}`}>
            {children}
        </button>
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
