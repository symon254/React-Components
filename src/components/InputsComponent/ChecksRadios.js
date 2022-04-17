import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const ChecksRadios = ({ type, label }) => {
    return (
        <div>
            <Form>
                <Form.Check type={type} label={label} />
            </Form>
        </div>
    );
};
ChecksRadios.defaultProps = {
    label: "label Goes here",
};
ChecksRadios.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
};
export default ChecksRadios;
