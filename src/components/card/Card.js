import { Card, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
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
    backgroundColorHeader,
    borderHead,
    borderBody,
    borderBottomBody,
    borderTitle,
    marginLeftHead,
    fontSizeHead,
    marginTophead,
    borderRadius,
    marginTopCard,
    marginLeftCard,
    marginRightCard,
    marginBottomCard,
}) => {
    return (
        <div>
            <Card
                style={{
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    marginTop: marginTopCard,
                    marginLeft: marginLeftCard,
                    marginRight: marginRightCard,
                    marginBottom: marginBottomCard,
                }}
                className={className}
                border={border}
            >
                <Nav variant={variantnav} defaultActiveKey={defaultActiveKey}>
                    <Nav.Item>
                        <Nav.Link href={href}>{nameTab}</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Card.Img variant={variantimg} src={src} alt={alt} />
                <Card.Header
                    style={{
                        backgroundColor: backgroundColorHeader,
                        border: borderHead,
                        marginLeft: marginLeftHead,
                        marginTop: marginTophead,
                        fontSize: fontSizeHead,
                    }}
                >
                    {header}
                </Card.Header>
                <Card.Body
                    style={{
                        border: borderBody,
                        borderBottom: borderBottomBody,
                    }}
                >
                    <Card.Title
                        style={{
                            border: borderTitle,
                        }}
                    >
                        {title}
                    </Card.Title>
                    {content}
                    {actions.map(({ label }) => (
                        <>{label}</>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
};
Cards.defaultProps = {
    backgroundColorHeader: "white",
};
Cards.propTypes = {
    backgroundColorHeader: PropTypes.string,
};
export default Cards;
