import { Col, Row } from "react-bootstrap";

interface DayProps {
    groom: string;
    bride: string;
    venue: string;
}

const ContentDay = (props: DayProps) => {
    return (
        <Row className="py-5 justify-content-center">
            <Col className="col-md-8">
                <h3 className="mt-5 text-uppercase">Arrival/Departure Times</h3>
                <p className="fs-4 p-4">
                    The ceremony and the reception are both being held at {props.venue}. <br />
                    The ceremony will start at 13:00. Please arrive between 12:00 - 12:30. <br />
                    If the weather is nice, we would highly recommend arriving early and taking the opportunity to explore the beautiful local countryside. <br />
                    The bar and music are required to end at midnight, however you are welcome to hang around the venue as long as you like. <br />
                    Please be aware that there is little to no phone signal at the venue so please make sure you book your taxis in advance!
                </p>

                <h3 className="text-uppercase">Order of the Day</h3>
                <p className="fs-4 p-4">
                    We are aiming for a very relaxed and informal event so there won’t be a set order of the day – we would much rather go with the flow!
                </p>

                <h3 className="text-uppercase">Dress code</h3>
                <p className="fs-4 p-4">
                    Smart/casual, but please be aware that some areas are grassy so avoiding stilettos is recommended!
                </p>

                <h3 className="text-uppercase">Catering</h3>
                <p className="fs-4 p-4">
                    Food will be provided by the fantastic Sourdough Ted – a local pizza company who will cook pizzas on demand as well as provide a selection of salads. <br />
                    We will be providing vegan and vegetarian options and you are able to pick whatever you would or wouldn’t like on your pizza on the day. <br />
                    However, if you have any allergies or intolerances please let us know so we can make sure there are alternatives provided for you. <br />
                    Dessert is being supplied by Rossi’s ice cream – a local family owned ice cream parlour and a firm favourite of ours, as well as lots of our local guests!
                </p>

                <h3 className="text-uppercase">Bar</h3>
                <p className="fs-4 p-4">
                    There will be a free bar provided stocked with beer, cider, wine, and spirits from local suppliers. <br />
                    There will also be plenty of soft drinks and tea and coffee.
                </p>
            </Col>
        </Row>
    );
}

export default ContentDay;