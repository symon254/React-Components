import React from "react";
import PropTypes from "prop-types";

const SelectInput = (
    value,
    className,
    onChange,
    placeholder,
    options,
    children
) => {
    return (
        <div>
            <select
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
                {options}
            </select>
            <label>{children}</label>
        </div>
    );
};
SelectInput.defaultProps = {
    placeholder: "dropdown",
};
SelectInput.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
export default SelectInput;
