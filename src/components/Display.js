import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonDisplay from "./Buttons/ButtonDisplay";
import InputDisplay from "./InputsComponent/InputDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import TablesDisplay from "./TablesComponent/TablesDisplay";
import AlertDisplay from "./Alert/AlertDisplay";

const Display = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <AlertDisplay />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ButtonDisplay />
                        </Col>
                        <Col>
                            {" "}
                            <InputDisplay />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TablesDisplay />
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* <Row>
                <Col>
                    <ButtonDisplay />
                </Col>
                <Col>
                    <InputDisplay />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <TablesDisplay />
                </Col>
                <Col>
                    <AlertDisplay />
                </Col>
            </Row> */}
        </Container>
    );
};

export default Display;
