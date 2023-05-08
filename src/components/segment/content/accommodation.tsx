import { Col, Row } from "react-bootstrap";

const ContentAccommodation = () => {
    return (
        <Row className="py-5 justify-content-center">
            <Col className="col-md-8">
                <h3 className="text-uppercase">Hotels and B&Bs</h3>
                <p className="fs-4 p-4">
                    The nearest hotels are the <a href="www.theilchester.co.uk">Ilchester Arms</a> and <a href="www.theabbeyhouse.co.uk">The Abbey House</a> in the nearby village of Abbotsbury or the <a href="www.kingsarmsportesham.co.uk">Kings Arms in Portesham</a> (all approximately 10 minutes’ drive). <br />
                    A little further afield in Dorchester there are several hotels, however we highly recommend the <a href="www.thekingsarmsdorchester.com">Kings Arms</a> which is right in the centre of town. <br />
                    If you’re looking to stay by the sea there are lots of hotels and B&Bs in Weymouth, West Bay, and Bridport.
                </p>
                <h3 className="text-uppercase">Camping</h3>
                <p className="fs-4 p-4">
                    There is also a camping site at the venue, you will need to bring your own tent but are proper toilet facilities on site. There is a site fee for each pitch of about £30. <br />
                    If you are interested in booking a pitch please contact the venue directly.
                </p>
            </Col>
        </Row>
    );
}

export default ContentAccommodation;