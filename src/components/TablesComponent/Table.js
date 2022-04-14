import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = ({ thData, tbData, className, size }) => {
    return (
        <table className={className} size={size}>
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
