import React from "react";
import { Modal, Button } from "react-bootstrap";

const Modals = ({ show, onHide, children, title }) => {
    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Modals;
