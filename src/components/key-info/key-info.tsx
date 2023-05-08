import { Row } from "react-bootstrap";
import { BiCalendarHeart } from "react-icons/bi";
import { BsPinMap } from "react-icons/bs";
import InfoCard from "./info-card";


interface KeyInfoProps {
    when: string;
    where: string;
}
const KeyInfo = (props: KeyInfoProps) => {
    return (
        <Row xs={1} md={2} className="mx-0 pb-4 border-top border-5 border-light text-center text-uppercase bg-gray">
            <InfoCard icon={<BiCalendarHeart size="1.1em"></BiCalendarHeart>} title="When" content={props.when}></InfoCard>
            <InfoCard icon={<BsPinMap></BsPinMap>} title="Where" content={props.where}></InfoCard>
        </Row>
    );
}

export default KeyInfo;