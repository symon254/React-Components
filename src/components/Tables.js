import React from "react";
import PropTypes from "prop-types";

const Tables = (value, className, data, tableHeadData) => {
    return (
        <div>
            <table className={className}>
                <th>
                    <tr>
                        <td>{tableHeadData}</td>
                    </tr>
                </th>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

Tables.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array,
    className: PropTypes.string,
};
export default Tables;
