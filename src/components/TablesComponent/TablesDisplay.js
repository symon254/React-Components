import React from "react";
import Cards from "../card/Card";
import Table from "../TablesComponent/Table";
import { tbData, thData } from "../TablesComponent/TableData";

function TablesDisplay() {
    const table = [
        {
            label: (
                <>
                    <Table
                        thData={thData}
                        tbData={tbData}
                        className="table"
                        size="small"
                        width="50rem"
                    />
                    <br />
                </>
            ),
        },
    ];
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    header="Tables"
                    title="table"
                    actions={table}
                />
            </div>
        </div>
    );
}

export default TablesDisplay;
