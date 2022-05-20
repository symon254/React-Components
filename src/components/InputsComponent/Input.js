import React from "react";
import "./style.css";

export const Input = ({
    id,
    labelName,
    className,
    LableClassName,
    ...rest
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`${LableClassName} input-group mb-3`}
            >
                {labelName}
                <input
                    {...rest}
                    id={id}
                    className={`${className} form-control`}
                />
                ;
            </label>
        </>
    );
};

export const Select = () => {
    return <div>Select</div>;
};
export const Chackbox = () => {
    return <div>Select</div>;
};
export const Toggle = () => {
    return <div>Select</div>;
};

Input.defaultProps = {
    value: "",
    name: "",
    type: "text",
    placeholder: "text Goes here",
};
Input.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
