import { Button, Col, Row } from "react-bootstrap";

const ContentRSVP = () => {

    return (
        <Row className="py-5 justify-content-center text-center">
            <Col className="col-md-8">
                <p className="fs-4 p-4">
                    Please RSVP via our online form:
                </p>
                <Button href="" target="_blank" rel="noreferrer" className="rsvp-button px-4" size="lg" variant="warning">Click here to RSVP</Button>
            </Col>
        </Row>
    );
}

export default ContentRSVP;