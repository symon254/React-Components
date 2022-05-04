import React from "react";
import Cards from "../card/Card";
import Table from "../TablesComponent/Table";
import { tbData, thData } from "../TablesComponent/TableData";
import "./Table.css";
function TablesDisplay() {
    const table = [
        {
            label: (
                <>
                    <Table
                        margin="40px"
                        thData={thData}
                        tbData={tbData}
                        className="table "
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
                    actions={table}
                    border="white"
                    borderBody="white"
                    borderHead="white"
                    borderTitle="white"
                />
            </div>
        </div>
    );
}

export default TablesDisplay;
