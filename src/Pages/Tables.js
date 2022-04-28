import React from "react";
import Table from "../components/TablesComponent/Table";
import { tbData, thData } from "../components/TablesComponent/TableData";
import Cards from "../components/card/Card";

const Tables = () => {
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
                        width="1420px"
                    />
                    <br />
                </>
            ),
        },
    ];

    return (
        <div>
            <Cards
                header="Table"
                fontSizeHead="20px"
                actions={table}
                backgroundColorHeader="lightblue"
                border="white"
                borderBody="white"
                borderHead="white"
                borderTitle="white"
            />
        </div>
    );
};

export default Tables;
