import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Pages.css";
import {
    TiSocialFacebookCircular,
    TiSocialTwitterCircular,
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialGooglePlusCircular,
    TiSocialInstagramCircular,
} from "react-icons/ti";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiObservatory } from "react-icons/gi";
import { RiCustomerServiceFill, RiServiceFill } from "react-icons/ri";
import {
    MdOutlineElectricalServices,
    MdOutlineHomeRepairService,
    MdOutlineLocalLaundryService,
    MdOutlineCopyright,
} from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
const Footers = () => {
    return (
        <div className="footer-whole">
            <Container>
                <Row>
                    <Col>
                        <div className="icons-footer icon-footer-container">
                            <TiSocialFacebookCircular />
                            <TiSocialTwitterCircular />
                            <TiSocialInstagramCircular />
                            <TiSocialLinkedinCircular />
                            <TiSocialGithubCircular />
                            <TiSocialGooglePlusCircular />
                        </div>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <div className="footer-labels">
                            <label>About</label>
                            <label>Help</label>
                            <label>Guid</label>
                            <label>Privacy</label>
                            <label>Terms</label>
                            <label>Adverts</label>
                        </div>
                    </Col>
                </Row>
                <br />

                <Row>
                    <div style={{ textAlign: "center", color: "white" }}>
                        <Col>more from us</Col>
                    </div>
                </Row>

                <Row>
                    <div
                        className="icons-footer2"
                        style={{ textAlign: "center" }}
                    >
                        <Col>
                            <AiOutlineCloudServer
                                style={{ marginRight: "10px" }}
                            />
                            <GiObservatory style={{ marginRight: "10px" }} />
                            <RiCustomerServiceFill
                                style={{ marginRight: "10px" }}
                            />
                            <RiServiceFill style={{ marginRight: "10px" }} />
                            <MdOutlineElectricalServices
                                style={{ marginRight: "10px" }}
                            />
                            <MdOutlineHomeRepairService
                                style={{ marginRight: "10px" }}
                            />
                            <MdOutlineLocalLaundryService
                                style={{ marginRight: "10px" }}
                            />
                            <FaServicestack />
                        </Col>
                    </div>
                </Row>
                <br />

                <Row>
                    <div style={{ textAlign: "center", color: "white" }}>
                        <Col>
                            <MdOutlineCopyright
                                style={{ marginRight: "10px", color: "white" }}
                            />
                            2022 trial{" "}
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footers;
