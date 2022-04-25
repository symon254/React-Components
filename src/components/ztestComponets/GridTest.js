import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Inputs from "../InputsComponent/Inputs";
import ChecksRadios from "../InputsComponent/ChecksRadios";

const GridTest = ({ children, className, xs, md, lg, spacing, actions }) => {
    const inputss = [
        {
            children: (
                <>
                    <br /> <Inputs />
                    <br />
                </>
            ),
        },
        {
            children: (
                <>
                    <ChecksRadios type="radio" label="radio" />
                    <ChecksRadios type="checkbox" label="checkbox" />
                    <ChecksRadios type="switch" label="switch" />
                </>
            ),
        },
    ];
    return (
        <Container className={className} spacing={spacing}>
            <Row>
                {actions.map(({ children }) => (
                    <Col md={md} lg={lg} xs={xs}>
                        {children}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GridTest;
