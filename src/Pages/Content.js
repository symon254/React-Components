import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcStart } from "react-icons/fc";
import Cards from "../components/card/Card";
import { DataSet1 } from "../Data/Data";
import "bootstrap/dist/css/bootstrap.min.css";

const Contents = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <div>
                            <FcStart style={{ fontSize: "60px" }} />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Images"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={DataSet1}
                                border="white"
                                borderBody="white"
                                borderHead="white"
                                borderTitle="white"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
        </Container>
    );
};

export default Contents;
