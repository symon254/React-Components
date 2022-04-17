import PropTypes from "prop-types";
import { Card, Nav } from "react-bootstrap";
const Cards = ({
    content,
    width,
    header,
    title,
    variantimg,
    src,
    className,
    alt,
    variantnav,
    nameTab,
    href,
    actions,
}) => {
    return (
        <div>
            <Card style={{ width: width }} className={className}>
                <Nav variant={variantnav}>
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
Cards.propTypes = {
    content: PropTypes.object,
};

export default Cards;
