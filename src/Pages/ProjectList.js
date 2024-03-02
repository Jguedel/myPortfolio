import NavBar from "../Components/NavBar";
import SingleProjectCard from "../Components/singleProjectCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Style/ProjectList.css";
import getProjs from "../Components/ProjectArr";

const ProjectList = () => {
  const projArr = getProjs();
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="projectList">
          <Col xs={8}>
            <span className="projects">
              {projArr.map(
                ({ img, title, description, features, link, key }) => (
                  <SingleProjectCard
                    img={img}
                    title={title}
                    description={description}
                    link={link}
                    features={features}
                    key={key}
                  />
                )
              )}
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProjectList;
