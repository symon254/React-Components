import React from "react";

const TableHead = ({ item, className }) => {
    return (
        <td className={className} title={item}>
            {item}
        </td>
    );
};

export default TableHead;
