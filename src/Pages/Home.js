import NavBar from "../Components/NavBar";

// BOOTSTRAP
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

//CSS
import "./Style/Home.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBar />
      <h1>Welcome,</h1>
      <h3>My Name is Jacob Guedel</h3>
      <h5>
        I am a full stack developer, currently employed at Amazon. I am
        currently focused on expanding my knowledge with AWS and earning my AWS
        solutions archatect certification
      </h5>

      <div className="aboutMe m-auto w-50" style={{ backgroundColor: "pink;" }}>
        <Card className="aboutMeCard">
          <Card.Header as="h3">About Me</Card.Header>
          <Card.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                  alt="Image One"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Title className="aboutMeTitle">
                  Currently Learning Objectives
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      Currently studying for my AWS Cloud Practiciner
                      certification
                    </li>
                    <li>
                      I plan on acheiveing my AWS Solutions Archatict and AWS
                      Cloud Developer Certifacations
                    </li>
                    <li>
                      Reasherching 3D modeling tools with a goal to create a
                      Outdoor Bouldering assistant app. This will assist with
                      finding routes that other climbers have mark
                    </li>
                  </ul>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Title className="aboutMeTitle">Hobbies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Rock Climbing</li>
                    <li>Hiking</li>
                    <li>Camping</li>
                    <li>Video Games - love games from FromSoftware</li>
                    <li>Computers</li>
                  </ul>
                </Card.Text>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
