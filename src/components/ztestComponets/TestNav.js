import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "../../Pages/Tables";
import Home from "../../Pages/Home";
import Components from "../../Pages/Components";
import "../../Pages/Pages.css";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiTable } from "react-icons/bi";
const TestNav = () => {
    return (
        <div
            style={{
                background: "white",
                height: "100px",
            }}
        >
            {" "}
            <Router>
                <div></div>
                <br />
                <div className="navigation ">
                    <nav>
                        <ul style={{ float: "right", marginRight: "-700px" }}>
                            <li className="list  ">
                                <div className="hovers">
                                    <a href="/Home">
                                        <span className="icon">
                                            <div className="div-icon">
                                                <FaHome
                                                    style={{
                                                        marginTop: "-40px",
                                                    }}
                                                />
                                            </div>
                                        </span>

                                        <span
                                            style={{ marginLeft: "-5px" }}
                                            className="text"
                                        >
                                            Home
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li className="list">
                                <a href="#">
                                    <span className="icon">
                                        <div className="div-icon">
                                            <FaUserAlt
                                                style={{ marginTop: "-40px" }}
                                            />
                                        </div>
                                    </span>
                                    <span
                                        style={{ marginLeft: "-5px" }}
                                        className="text"
                                    >
                                        profile
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="/Components">
                                    <span className="icon">
                                        <div className="div-icon">
                                            <SiWebcomponentsdotorg
                                                style={{ marginTop: "-40px" }}
                                            />
                                        </div>
                                    </span>
                                    <span
                                        style={{ marginLeft: "-5px" }}
                                        className="text"
                                    >
                                        Component
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="/Tables">
                                    <span className="icon">
                                        <div className="div-icon">
                                            <BiTable
                                                style={{ marginTop: "-40px" }}
                                            />
                                        </div>
                                    </span>
                                    <span
                                        style={{ marginLeft: "-5px" }}
                                        className="text"
                                    >
                                        Table
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="#">
                                    <span className="icon">
                                        <div className="div-icon">
                                            <MdSettings
                                                style={{ marginTop: "-40px" }}
                                            />
                                        </div>
                                    </span>
                                    <span
                                        style={{ marginLeft: "-5px" }}
                                        className="text"
                                    >
                                        settings
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="container mt-3">
                        <Routes>
                            <Route path={"/Home"} element={<Home />} />
                            <Route
                                path={"/Components"}
                                element={<Components />}
                            />
                            <Route path={"/Tables"} element={<Tables />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default TestNav;
