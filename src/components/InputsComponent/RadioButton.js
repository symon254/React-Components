import PropTypes from "prop-types";
import React from "react";

const RadioButton = ({
    id,
    type,
    name,
    isSelected,
    value,
    onChange,
    children1,
    children2,
    labelName,
    defaultValue,
}) => {
    return (
        <div>
            <label htmlFor={id}>{children1}</label>
            <input
                id={id}
                type={type}
                name={name}
                checked={isSelected}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{children2}</label>
        </div>
    );
};
RadioButton.defaultProps = {
    value: "",
    name: "",
    type: "radio",
};
RadioButton.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
};
export default RadioButton;
