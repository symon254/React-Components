import "bootstrap/dist/css/bootstrap.min.css";
// import ButtonDisplay from "./components/Buttons/ButtonDisplay";
// import InputDisplay from "./components/InputsComponent/InputDisplay";
// import TablesDisplay from "./components/TablesComponent/TablesDisplay";
//import GridDisplay from "./components/ztestComponets/Gridsdisp";
import Display from "./components/Display";
import React from "react";
import { Card, Nav } from "react-bootstrap";

function App(c) {
    return (
        <div className="App">
            {/* <div>
                {" "}
                <ButtonDisplay />
            </div>
            <br />
            <div>
                <InputDisplay />
            </div>
            <br />
            <div>
                {" "}
                <TablesDisplay />
            </div> */}
            {/* <div>
                {" "}
                <GridDisplay />
            </div> */}

            <div>
                <Card border="primary">
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link>Tab1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Tab2</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Card.Header>My Components</Card.Header>
                    <Card.Body>
                        <Card.Title>Components</Card.Title>
                        <Display />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default App;
