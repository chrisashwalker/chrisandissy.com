import { Card, Col } from "react-bootstrap";
import { BsDashLg } from "react-icons/bs";

interface InfoCardProps {
    icon: any;
    title: string;
    content: string;
}

const InfoCard = (props: InfoCardProps) => {
    return (
        <Col className="g-4">
            <Card className="border-0 display-6 bg-transparent" text="light">
                <Card.Body>
                    <Card.Text>
                        {props.icon}
                    </Card.Text>
                    <Card.Title className="display-5">
                        {props.title}
                    </Card.Title>
                    <Card.Text>
                        <BsDashLg></BsDashLg>
                    </Card.Text>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default InfoCard;