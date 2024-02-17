import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/NavBar.css";

const NavBar = () => {
  return (
    <div className="sticky-top NavBar">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/myPortfolio">
            <Navbar.Brand href="/">Jacobs Porfolio</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/Projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ContactMe">
                <Nav.Link>Contact Me</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
