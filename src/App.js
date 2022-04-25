import "bootstrap/dist/css/bootstrap.min.css";
// import ButtonDisplay from "./components/Buttons/ButtonDisplay";
// import InputDisplay from "./components/InputsComponent/InputDisplay";
// import TablesDisplay from "./components/TablesComponent/TablesDisplay";
//import GridDisplay from "./components/ztestComponets/Gridsdisp";
import Display from "./components/Display";
import React from "react";
import Button from "./components/Buttons/Buttons";

function App(c) {
    return (
        <div className="App">
            {/* <div>
                {" "}
                <ButtonDisplay />
            </div>
            <br />
            <div>
                <InputDisplay />
            </div>
            <br />
            <div>
                {" "}
                <TablesDisplay />
            </div> */}
            {/* <div>
                {" "}
                <GridDisplay />
            </div> */}

            <div className="card ">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a class="navbar-brand" href="#">
                                React-Components
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="true"
                                href="#"
                            >
                                Tab1
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Tab2
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Tab3</a>
                        </li>
                    </ul>

                    <Button
                        float="right"
                        marginTop="-37px"
                        children="red"
                        className="primary"
                        width={"100px"}
                    />
                    <Button
                        float="right"
                        marginTop="-37px"
                        marginRight="5px"
                        children="blue"
                        className="primary"
                        width={"100px"}
                    />
                    <ul
                        className="nav "
                        style={{
                            float: "right",
                            marginRight: "-100px",
                            marginTop: "-20px",
                            marginBottom: "2px",
                            paddingTop: "20px",
                        }}
                    >
                        <li
                            class="nav-item dropdown"
                            style={{
                                float: "right",
                                marginRight: "100px",
                                marginTop: "-37px",
                                marginBottom: "-20px",
                            }}
                        >
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5
                        className="card-header"
                        style={{
                            float: "left",
                            width: "100%",
                            textAlign: "left",
                        }}
                    >
                        My Components
                    </h5>
                    <br />
                    <br />
                    <h5
                        className="card-title"
                        style={{ textAlign: "left", marginLeft: "100px" }}
                    >
                        {" "}
                        Components
                    </h5>
                    <br />
                    <Display />
                </div>
            </div>
        </div>
    );
}

export default App;
