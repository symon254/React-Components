import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = ({ thData, tbData, className, size, width, margin, padding }) => {
    return (
        <table
            className={className}
            size={size}
            style={{ width: width, margin: margin, padding: padding }}
        >
            <thead>
                <tr>
                    {thData.map((h) => {
                        return <TableHead key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbData.map((item, id) => {
                    return <TableRow key={id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;
