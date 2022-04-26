import React from "react";
import Button from "../components/Buttons/Buttons";
import Table from "../components/TablesComponent/Table";
import { tbData, thData } from "../components/TablesComponent/TableData";
import Cards from "../components/card/Card";
import Contents from "./Content";

const Home = () => {
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
                </div>
                <div className="card-body">
                    <br />
                    <br />
                    <h3 className="card-title" style={{ textAlign: "center" }}>
                        Sample Example
                    </h3>
                    <div style={{ width: "700px", marginLeft: "450px" }}>
                        <h6 style={{ textAlign: "center" }}>
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example Sample Example
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example Sample Example
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example Sample Example
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example Sample Example
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example Sample Example
                            Sample Example Sample Example Sample Example Sample
                            Example Sample Example Sample Example{" "}
                        </h6>
                    </div>
                    <br />
                    <br />
                    <div>
                        <Contents />
                    </div>
                    <div>
                        <Cards header="Tables" actions={table} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
