import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Style/singleProjectCard.css";
const SingleProjectCard = (props) => {
  const handleCLick = (e) => {
    // e.preventDefault();
  };
  return (
    <Card style={{ width: "100%" }} className="singleProject">
      <Card.Img className="projectImg" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          as="a"
          href={props.link}
          variant="primary"
          onClick={handleCLick}
          className="projectBtn"
        >
          Check out the site
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProjectCard;
