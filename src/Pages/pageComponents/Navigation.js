import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "../Tables";
import Home from "../Home";
import Components from "../Components";
import "./../Pages.css";
import { SiWebcomponentsdotorg } from "react-icons/si";
import {
    FaHome,
    FaUserAlt,
    FaHandsHelping,
    FaInfoCircle,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiTable } from "react-icons/bi";
import { IoLogoTux, IoMdLogOut } from "react-icons/io";

const Navigation = () => {
    return (
        <div>
            <Router>
                <div style={{ marginBottom: "30px" }}></div>
                <Navbar bg="primary" variant="dark">
                    <Container className="navigation-main ">
                        <Navbar.Brand href="/Home">
                            <IoLogoTux
                                className="icon-home"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "30px",
                                }}
                            />
                            Simon
                        </Navbar.Brand>
                        <Nav className="justify-content-end">
                            <div className="navi ">
                                <ul>
                                    <li className="list ">
                                        <a href="/Home">
                                            <span className="icon">
                                                <div className="div-icon-navi bg-primary">
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
                                    </li>
                                    <li className="list">
                                        <a href="#">
                                            <span className="icon">
                                                <div className="div-icon-navi bg-primary">
                                                    <FaUserAlt
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
                                                profile
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="/Components">
                                            <span className="icon">
                                                <div className="div-icon-navi bg-primary">
                                                    <SiWebcomponentsdotorg
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
                                                Component
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="/Tables">
                                            <span className="icon">
                                                <div className="div-icon-navi bg-primary">
                                                    <BiTable
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
                                                Table
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="#">
                                            <span className="icon">
                                                <div className="div-icon-navi bg-primary">
                                                    <MdSettings
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
                                                settings
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <NavDropdown
                                className="dropdowns"
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    <FaUserAlt className="drop-icon" /> user
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <FaHandsHelping className="drop-icon" />{" "}
                                    Help
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <FaInfoCircle className="drop-icon" /> More
                                    Info
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <IoMdLogOut className="drop-icon" /> LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="container mt-3">
                    <Routes>
                        <Route path={"/Home"} element={<Home />} />
                        <Route path={"/Components"} element={<Components />} />
                        <Route path={"/Tables"} element={<Tables />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default Navigation;
