import React from "react";
//import PropTypes from "prop-types";
import { FormSelect } from "react-bootstrap";

const SelectInput = ({ actions, width, size, placeholder }) => {
    return (
        <div>
            <FormSelect
                placeholder={placeholder}
                size={size}
                style={{ width: width }}
            >
                {actions.map(({ index, label }) => (
                    <option key={index}>{label}</option>
                ))}
            </FormSelect>
        </div>
    );
};

export default SelectInput;
