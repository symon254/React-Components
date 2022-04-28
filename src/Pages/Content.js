import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcDocument } from "react-icons/fc";
import { BiText } from "react-icons/bi";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsImage, BsMusicNoteBeamed, BsPlayCircle } from "react-icons/bs";
import Cards from "../components/card/Card";
import {
    Images,
    Headings,
    Videos,
    Audios,
    Addverts,
    Documents,
    Texts,
} from "../Data/Data";
import "bootstrap/dist/css/bootstrap.min.css";

const Contents = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div
                        style={{
                            height: "400px",
                            width: "600px",
                            marginLeft: "300px",
                        }}
                    >
                        <Cards
                            header=" Sample example"
                            marginLeftHead="130px"
                            backgroundColorHeader="white"
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
                    <div>
                        <div>
                            <BsImage
                                style={{ fontSize: "60px", color: "blue" }}
                            />
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
                                actions={Images}
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
                            <BsMusicNoteBeamed
                                style={{ fontSize: "60px", color: "blue" }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Audio"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={Audios}
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
                            <BsPlayCircle
                                style={{ fontSize: "60px", color: "blue" }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Video"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={Videos}
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
                            <RiAdvertisementLine
                                style={{ fontSize: "60px", color: "blue" }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Ad Formats"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={Addverts}
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
                            <FcDocument
                                style={{ fontSize: "60px", color: "blue" }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Documents"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={Documents}
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
                            <BiText
                                style={{ fontSize: "60px", color: "blue" }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-90px",
                                marginLeft: "70px",
                            }}
                        >
                            <Cards
                                header=" Text"
                                backgroundColorHeader="white"
                                fontSizeHead="40px"
                                actions={Texts}
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
