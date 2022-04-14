import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Grid = ({ children, className, xs, md, lg, spacing }) => {
    return (
        <Container className={className} spacing={spacing}>
            <Row>
                <Col md={md} lg={lg} xs={xs}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default Grid;
