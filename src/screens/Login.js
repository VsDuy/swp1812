import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Toast,
} from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../service/userService";
export default function Login() {
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  // const nav = useNavigate();

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  // const handleReset = (event, field) => {
  //   setLoginDetail({
  //     email: "",
  //     password: "",
  //   });
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    //validation
    if (loginDetail.email.trim() == "" || loginDetail.password.trim() == "") {
      toast.error("Please enter your email and password!");
      return;
    }

    //submit data lên sv bằng token

    login(loginDetail)
      .then((jwtTokenData) => {
        console.log("User login: ");
        console.log(jwtTokenData);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log("error");
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>

                  <div className="mb-3">
                    <Form onSubmit={handleFormSubmit}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          type="text"
                          id="email"
                          value={loginDetail.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          value={loginDetail.password}
                          onChange={(e) => handleChange(e, "password")}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <button class="button" onClick={handleChange}>
                          Login
                          <div class="hoverEffect">
                            <div></div>
                          </div>
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
