import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "../Tables";
import Home from "../Home";
import Components from "../Components";
import "./../Pages.css";

const Navigation = () => {
    return (
        <div>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container className="navigation-main ">
                        <Navbar.Brand href="/Home">Home-Page</Navbar.Brand>
                        <Nav className="justify-content-end">
                            <Link to={"/Home"} className="nav-link">
                                Home
                            </Link>
                            <Link to={"/Components"} className="nav-link">
                                Components
                            </Link>
                            <Link to={"/Tables"} className="nav-link">
                                Tables
                            </Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Action2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Action3
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Action4
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
