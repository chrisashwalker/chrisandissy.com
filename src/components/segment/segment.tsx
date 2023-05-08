import "./segment.css";
import { Image, Row } from "react-bootstrap";

const Segment = (props: any) => {
    const classes : string = props.bg + " text-lighter text-justify px-xxxl py-5 mx-0 justify-content-center border-top border-5 border-light segment";
    return (
        <Row className={classes} id={props.id}>
            <p className="display-2 text-center text-uppercase">{props.title}</p>
            <Image roundedCircle src={props.img} alt={props.imgAlt} className="my-4 p-0" style={{
                objectFit: "cover",
                width: "20vw",
                height: "20vw",
                minWidth: "200px",
                minHeight: "200px",
                maxWidth: "480px",
                maxHeight: "480px"
            }} />
            {props.children}
        </Row>
    );
}

export default Segment;