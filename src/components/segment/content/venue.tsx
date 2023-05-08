import { Accordion, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { BiCar, BiTaxi } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineTrain } from "react-icons/md";


interface ContentVenueProps {
    venue: string;
    website: string;
    address: string;
    map: string;
    directionsDorch: string;
    directionsBridport: string;
    directionsWeymouth: string;
}

const ContentVenue = (props: ContentVenueProps) => {
    return (
        <div>
            <Row className="py-5 justify-content-center text-center">
                <Col className="col-md-8">
                    <Card className="bg-transparent border-0">
                        <Card.Body className="p-0">
                            <Card.Text className="fs-3 mb-5">
                                <a href={props.website}>{props.venue}</a> is a beautiful, rustic, private barn nestled in the idyllic Dorset countryside. <br />
                                Both the ceremony and the reception will be held at the barn. <br />
                                <br />
                                The venue address is {props.address}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={9}>
                    <Card className="bg-transparent border-0">
                        <Card.Body className="p-0">
                            <iframe title="venue-map" loading="lazy" src={props.map}
                                style={{
                                    height: "450px",
                                    width: "100%",
                                    border: 0
                                }}></iframe>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className="bg-light text-dark border-0">
                        <Card.Body className="p-0">
                            <Card.Text className="fs-4 p-4">
                                <BsInfoCircle size="1.5em"></BsInfoCircle>
                                <span className="mt-4 d-block">
                                    The venue is very accessible, the majority of the outside of the venue is on flat gravel, tarmac or on a patio. <br />
                                    There are a few steps up to the ceremony area but there is a bannister or wheelchair access. Inside the barn has a flagstone flooring.
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="py-5">
                <Col>
                    <h3 className="text-uppercase mb-4">Travelling to the venue</h3>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><span className="fs-4"><MdOutlineTrain size="1.5em" className="me-4"></MdOutlineTrain>Public transport</span></Accordion.Header>
                            <Accordion.Body>
                                {props.venue} is a remote location and so there is no public transport directly to the venue. <br />
                                The nearest train stations are Dorchester (South, and West) and Weymouth.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className="fs-4"><BiCar size="1.5em" className="me-4"></BiCar>Travelling by car</span></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    There is plenty of free parking at the venue. It takes the following approximate times to drive to the venue from:
                                </p>
                                <Tabs className="mb-3">
                                    <Tab eventKey="dorchester" title="Dorchester: 20 mins" dangerouslySetInnerHTML={{ __html: props.directionsDorch }}>
                                    </Tab>
                                    <Tab eventKey="weymouth" title="Weymouth: 25 mins" dangerouslySetInnerHTML={{ __html: props.directionsWeymouth }}>
                                    </Tab>
                                    <Tab eventKey="bridport" title="Bridport: 25 mins" dangerouslySetInnerHTML={{ __html: props.directionsBridport }}>
                                    </Tab>
                                </Tabs>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className="fs-4"><BiTaxi size="1.5em" className="me-4"></BiTaxi>Taxis</span></Accordion.Header>
                            <Accordion.Body>
                                If you choose to travel to the venue by taxi we recommend the following nearby taxi companies:
                                <ul>
                                    <li>A-Line (Dorchester)</li>
                                    <li>Bobs Cars (Dorchester)</li>
                                    <li>Wey-Line (Weymouth)</li>
                                    <li>Fleetline (Weymouth)</li>
                                    <li>Bees cars (Weymouth)</li>
                                </ul>
                                Please be aware that there is little to no phone signal at the venue, so please make sure you book your taxis in advance!<br />
                                The approximate costs between 07.00 and 22.00 Monday to Saturday are:
                                <ul>
                                    <li>{props.venue} to Dorchester = £29.00</li>
                                    <li>{props.venue} to Weymouth = £50.00</li>
                                    <li>{props.venue} to Bridport = £60.00</li>
                                </ul>
                                Between 22.00 - 07.00 Monday to Saturday and all day Sunday, the fees are typically multiplied by 1.5.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </div>
    );
}

export default ContentVenue;