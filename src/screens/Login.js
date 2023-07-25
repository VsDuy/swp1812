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
import { Link, useNavigate ,useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../service/userService";
import axios from "axios";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    try {
      
      const response = await axios.post(
        "http://localhost:8080/api/ccg1/login",
        {
          user: {
            email,
            password,
          },
        }
      );

      // if()
      const { data } = response;
      console.log(data)
      // console.log(JSON.stringify(data));
      const user = data.userID;
      
      if (!user) {
        toast.error("Email and password are incorrect");
      }else{
        toast.success("login success");
        localStorage.setItem("token", user);
        nav("/");
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      toast.error("Email and password are incorrect");
      // setError(error.response.data.errors.message);
      // console.log(error)
    }
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(loginDetail);

  //   //validation
  //   if (loginDetail.email.trim() == "" || loginDetail.password.trim() == "") {
  //     toast.error("Please enter your email and password!");
  //     return;
  //   }

  //   //submit data lên sv bằng token

  //   login(loginDetail)
  //     .then((jwtTokenData) => {
  //       console.log("User login: ");
  //       console.log(jwtTokenData);
  //       toast.success("Login successful");
  //       return "/";
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       if (error.response.status == 400 || error.response.status == 404) {
  //         toast.error(error.response.data.message);
  //       } else {
  //         toast.error("Something went wrong");
  //       }
  //     });
  // };

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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                        <button class="button" variant="primary" type="submit">
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
