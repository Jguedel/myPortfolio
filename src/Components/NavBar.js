import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/NavBar.css";

const NavBar = () => {
  return (
    <div className="sticky-top NavBar">
      <Navbar expand="sm" bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/myPortfolio">
            <Navbar.Brand href="/" className="bold">
              Jacobs Porfolio
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/Projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/test1">
                <Nav.Link href="./features">Contact Me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/test2">
                <Nav.Link href="pricing">test2</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
