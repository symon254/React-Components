import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Buttons/Buttons";
import React, { useState } from "react";
import Table from "./components/TablesComponent/Table";
import { tbData, thData } from "./components/TablesComponent/TableData";
import Cards from "./components/card/Card";
import Contents from "./Pages/Content";
import Modals from "./components/Modal/Modal";
function App() {
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

    const [handleShowBlue, setHandleShowBlue] = useState(false);
    const [handleShowRed, setHandleShowRed] = useState(false);

    return (
        <div className="App">
            <div className="card ">
                <div
                    className="card-header"
                    style={{ backgroundColor: "white", boarderColor: "white" }}
                >
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item" style={{ marginLeft: "50px" }}>
                            <a class="navbar-brand" href="#">
                                Home-Page
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                textAlign: "center",
                                marginLeft: "520px",
                                paddingRight: "30px",
                                paddingLeft: "30px",
                            }}
                        >
                            <a
                                className="nav-link active"
                                aria-current="true"
                                href="#"
                            >
                                Tab1
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                paddingRight: "30px",
                                paddingLeft: "30px",
                            }}
                        >
                            <a className="nav-link" href="#">
                                Tab2
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                paddingRight: "30px",
                                paddingLeft: "30px",
                            }}
                        >
                            <a className="nav-link " href="#">
                                Tab3
                            </a>
                        </li>
                    </ul>
                    <Button
                        float="right"
                        marginTop="-37px"
                        marginLeft="20px"
                        children="red"
                        styleClass="btn-danger"
                        width={"100px"}
                        onClick={() => setHandleShowRed(true)}
                    />
                    <Button
                        float="right"
                        marginTop="-37px"
                        children="blue"
                        width={"100px"}
                        onClick={() => setHandleShowBlue(true)}
                    />
                </div>
                <div className="card-body">
                    <br />
                    <br />
                    <div>
                        <Contents />
                    </div>
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
                </div>
            </div>
            <Modals
                title="blue"
                children="this is blue"
                showModal={handleShowBlue}
                onHideMode={() => setHandleShowBlue(false)}
            />
            <Modals
                title="red"
                children="this is red"
                showModal={handleShowRed}
                onHideMode={() => setHandleShowRed(false)}
            />
        </div>
    );
}

export default App;
