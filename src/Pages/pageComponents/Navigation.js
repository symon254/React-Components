import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modals from "../../components/Modal/Modal";
import Button from "../../components/Buttons/Buttons";
import Tables from "../Tables";
import Home from "../Home";

const Navigation = () => {
    const [handleShowBlue, setHandleShowBlue] = useState(false);
    const [handleShowRed, setHandleShowRed] = useState(false);

    return (
        <div>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/Home">Home-Page</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to={"/Home"} className="nav-link">
                                Home
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

                        <Button
                            float="right"
                            marginTop="-px"
                            marginRight="20px"
                            children="red"
                            styleClass="btn-danger"
                            width={"100px"}
                            onClick={() => setHandleShowRed(true)}
                        />
                        <Button
                            float="right"
                            marginTop="-px"
                            children="blue"
                            styleClass="btn-success"
                            width={"100px"}
                            onClick={() => setHandleShowBlue(true)}
                        />
                    </Container>
                </Navbar>
                <div className="container mt-3">
                    <Routes>
                        <Route path={"/Home"} element={<Home />} />
                        <Route path={"/Tables"} element={<Tables />} />
                    </Routes>
                </div>
            </Router>
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
};

export default Navigation;
