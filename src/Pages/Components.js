import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonDisplay from "../components/Buttons/ButtonDisplay";
import InputDisplay from "../components/InputsComponent/InputDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertDisplay from "../components/Alert/AlertDisplay";
import TablesDisplay from "../components/TablesComponent/TablesDisplay";
import Cards from "../components/card/Card";
import { Headings } from "../Data/Data";

const Components = () => {
    return (
        <Container>
            <div
                style={{
                    marginLeft: "200px",
                }}
            >
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "400px",
                                width: "600px",
                                marginLeft: "100px",
                                borderRadius: "8px",
                            }}
                        >
                            <Cards
                                className="comp-heading"
                                borderRadius="8px"
                                header=" Sample example"
                                marginLeftHead="130px"
                                backgroundColorHeader="rgba(230, 217, 217, 0.925)"
                                fontSizeHead="40px"
                                actions={Headings}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            className="comp-heading"
                            style={{
                                width: "500px",
                            }}
                        >
                            <AlertDisplay />
                        </div>
                    </Col>

                    <Col>
                        <div className="comp-heading">
                            <ButtonDisplay />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div
                        style={{
                            height: "400px",
                            width: "600px",
                            marginLeft: "300px",
                            marginTop: "20px",
                        }}
                    >
                        <Col className="comp-heading">
                            <InputDisplay />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Col className="comp-heading">
                            <TablesDisplay />
                        </Col>
                    </div>
                </Row>
            </div>
            <br />
            <br />
            <br />
            <br />
        </Container>
    );
};

export default Components;
