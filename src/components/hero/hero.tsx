import "./hero.css";

import { Card } from "react-bootstrap";

interface HeroProps {
    groom: string;
    bride: string;
}

const Hero = (props: HeroProps) => {
    return (
        <Card className="hero border-0 bg-dark text-light text-center">
            <Card.Img className="hero-img" src="img/hero.jpg" alt="background" />
            <Card.ImgOverlay className="d-flex flex-column p-0 align-items-center justify-content-center">
                <Card.Text className="hero-overlay rounded p-md-5 p-3 bg-darkish text-light display-4 text-center">
                    <span className="display-1 d-block">{props.groom} & {props.bride}</span>
                    <span className="typing m-auto display-3 text-rouge d-block">&nbsp;are getting married.</span>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Hero;