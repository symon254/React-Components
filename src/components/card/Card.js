import { Card, Nav } from "react-bootstrap";
import React from "react";

const Cards = ({
    content,
    width,
    height,
    header,
    title,
    defaultActiveKey,
    variantimg,
    src,
    className,
    alt,
    variantnav,
    nameTab,
    href,
    actions,
    border,
}) => {
    return (
        <div>
            <Card
                style={{ width: width, height: height }}
                className={className}
                border={border}
            >
                <Nav variant={variantnav} defaultActiveKey={defaultActiveKey}>
                    <Nav.Item>
                        <Nav.Link href={href}>{nameTab}</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Card.Img variant={variantimg} src={src} alt={alt} />
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {content}
                    {actions.map(({ label }) => (
                        <>{label}</>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;
