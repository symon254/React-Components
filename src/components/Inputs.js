import PropTypes from "prop-types";

const Inputs = ({ type, name, placeholder, value, onChange }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
Inputs.defaultProps = {
    value: "",
    name: "",
    type: "text",
    placeholder: "text Goes here",
};
Inputs.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
export default Inputs;
