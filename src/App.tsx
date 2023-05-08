import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import "@fontsource/jost";
import "@fontsource/rouge-script";

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import FadeSection from "./components/fade-section/fade-section";
import Hero from "./components/hero/hero";
import KeyInfo from "./components/key-info/key-info";
import Menu from "./components/menu/menu";
import Segment from "./components/segment/segment";

import ContentVenue from "./components/segment/content/venue";
import ContentAccommodation from "./components/segment/content/accommodation";
import ContentDay from "./components/segment/content/day";
import ContentRegister from "./components/segment/content/register";
import ContentOther from "./components/segment/content/other";
import Footer from "./components/footer/footer";
import { readConfig } from "./contexts/data-context";
//import ContentRSVP from "./components/segment/content/rsvp";


const App = () => {

    const [groom, setGroom] = useState("");
    const [bride, setBride] = useState("");
    const [date, setDate] = useState("");
    const [venue, setVenue] = useState("");
    const [map, setMap] = useState("");
    const [venueWebsite, setVenueWebsite] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    //const [venueEmail, setVenueEmail] = useState("");
    const [directionsDorch, setDirectionsDorch] = useState("");
    const [directionsBridport, setDirectionsBridport] = useState("");
    const [directionsWeymouth, setDirectionsWeymouth] = useState("");
    //const [donationKey, setDonationKey] = useState("");

    useEffect(() => {

        readConfig().then((appConfig) => {
            setGroom(appConfig.groom);
            setBride(appConfig.bride);
            setDate(appConfig.date);
            setVenue(appConfig.venue);
            setMap(appConfig.map);
            setVenueWebsite(appConfig.venueWebsite);
            setVenueAddress(appConfig.venueAddress);
            //setVenueEmail(appConfig.venueEmail);
            setDirectionsBridport(appConfig.directionsBridport);
            setDirectionsDorch(appConfig.directionsDorch);
            setDirectionsWeymouth(appConfig.directionsWeymouth);
            //setDonationKey(appConfig.donationKey);
            document.title = (groom !== "") ? groom + " & " + bride : document.title;
        });

        return () => {}
    },[groom, bride]);

    return (
        <Container fluid className="g-0 bg-dark text-light text-jost fs-4">
            <Menu></Menu>
            <Hero groom={groom} bride={bride}></Hero>
            <FadeSection>
                <KeyInfo when={date} where={`${venue}, Dorset`}></KeyInfo>
            </FadeSection>
            <FadeSection>
                <Segment bg="bg-blue" id="venue" title="Venue" img="img/venue.jpg" imgAlt="Venue">
                    <ContentVenue venue={venue} website={venueWebsite} address={venueAddress} map={map}
                        directionsDorch={directionsDorch} directionsBridport={directionsBridport} directionsWeymouth={directionsWeymouth}></ContentVenue>
                </Segment>
            </FadeSection>
            <FadeSection>
                <Segment bg="bg-indigo" id="accommodation" title="Accommodation" img="img/accom.jpg" imgAlt="Accommodation">
                    <ContentAccommodation></ContentAccommodation>
                </Segment>
            </FadeSection>
            <FadeSection>
                <Segment bg="bg-red" id="the-day" title="The Day" img="img/rings.jpg" imgAlt="Rings">
                    <ContentDay groom={groom} bride={bride} venue={venue}></ContentDay>
                </Segment>
            </FadeSection>
            <FadeSection>
                <Segment bg="bg-pink" id="register" title="Register" img="img/gifts.jpg" imgAlt="Gifts">
                    <ContentRegister></ContentRegister>
                </Segment>
            </FadeSection>
            <FadeSection>
                <Segment bg="bg-gray" id="other" title="Other bits and bobs" img="img/cakes.jpg" imgAlt="Cakes">
                    <ContentOther></ContentOther>
                </Segment>
            </FadeSection>
            <Footer></Footer>
        </Container>
    );
}

export default App;
