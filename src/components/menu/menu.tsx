import "./menu.css";

import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {

    return (
        <Navbar collapseOnSelect sticky="top" variant="dark" expand="md" className="nav p-0 border-bottom bg-dark text-uppercase jost extra-space">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="w-100" id="basic-navbar-nav">
                <Nav className="w-100 justify-content-center text-center fs-5">
                    <Nav.Item className="m-auto">
                        <Nav.Link href="#venue">Venue</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="m-auto">
                        <Nav.Link href="#accommodation">Accommodation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="m-auto">
                        <Nav.Link href="#the-day">The Day</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="m-auto">
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
