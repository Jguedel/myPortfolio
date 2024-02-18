//COMPONENTS
import NavBar from "../Components/NavBar";
import LoadingPage from "../Components/Loading";
import SuccessMsg from "../Components/SuccessMsg";

// BOOTSTRAP
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//CSS
import "./Style/ContactMe.css";

//DISCORD FUNCTIONS
import discordFunctions from "../Functions/discord";
import { wait } from "@testing-library/user-event/dist/utils";

const HomePage = () => {
  const emptyForm = {
    formData: {
      msg: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  };
  const [validated, setValidated] = useState(false);
  const [contactForm, setContactForm] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [msgStatus, setMsgStatus] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (msgStatus) {
      setTimeout(() => {
        setMsgStatus(false);
      }, 9000);
    }
  }, [msgStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let validation = true;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      try {
        setIsLoading(true);
        validation = false;
        setValidated(false);
        const description = Object.entries(contactForm.formData)
          .map((d) => `${d[0]}: ${d[1]}`)
          .join("\n");
        const disFuncs = new discordFunctions();
        disFuncs.send(description, "New Request");
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setMsgStatus(true);
      } catch (error) {
        console.debug("error sending msg");
      }
    }
    if (validation) {
      setValidated(true);
    }
  };

  const handleChange = (name, value) => {
    setContactForm({
      formData: {
        ...contactForm.formData,
        [name]: value,
      },
    });
  };

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <div className="contactMePage">
        <NavBar />
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="m-auto"
        >
          <Form.Group className="formInput" controlId="validationCommet">
            <Form.Label>Meassage</Form.Label>
            <InputGroup hasValidation>
              <textarea
                name="msg"
                placeholder="Enter why you wish to contacting me"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleChange(name, value);
                }}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="formInput" controlId="validationFirst">
            <Form.Label>First name</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                First Name:
              </InputGroup.Text>
              <Form.Control
                required
                name="firstName"
                type="text"
                placeholder="John"
                className="but"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleChange(name, value);
                }}
              />
              <Form.Control.Feedback
                type="invalid"
                className="formValidationText"
              >
                Please enter your first name
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type="valid"
                className="formValidationText"
              >
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="formInput" controlId="validationLast">
            <Form.Label>Last name</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                Last Name:
              </InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Doe"
                name="lastName"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleChange(name, value);
                }}
              />
              <Form.Control.Feedback
                type="invalid"
                className="formValidationText"
              >
                Please enter your last name
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type="valid"
                className="formValidationText"
              >
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="formInput" controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Email:</InputGroup.Text>
              <Form.Control
                type="email"
                required
                placeholder="Example@example.com"
                aria-describedby="inputGroupPrepend"
                name="email"
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleChange(name, value);
                }}
              />
              <Form.Control.Feedback
                type="invalid"
                className="formValidationText"
              >
                Please enter a valid email
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type="valid"
                className="formValidationText"
              >
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Form>
        {msgStatus && <SuccessMsg />}
      </div>
    );
  }
};

export default HomePage;
