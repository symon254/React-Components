import React from "react";
import { Modal, Button } from "react-bootstrap";

const Modals = ({ showModal, onHideMode, children, title, onHideButton }) => {
    return (
        <Modal
            show={showModal}
            onHide={onHideMode}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHideMode}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Modals;
