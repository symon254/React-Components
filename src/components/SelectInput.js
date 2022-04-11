import React from "react";
import PropTypes from "prop-types";

const SelectInput = (value, styleClass, onChange, placeholder, options) => {
    return (
        <div>
            <select
                className={styleClass}
                placeholder={placeholder}
                value={value}
                options={options}
                onChange={onChange}
            />
        </div>
    );
};
SelectInput.defaultProps = {
    placeholder: "dropdown",
};
SelectInput.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array,
    styleClass: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
export default SelectInput;
