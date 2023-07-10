import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();


  const handleLogin = () => {
    if (user && password) {
      alert("Login success");
      nav('/');
    }
  }
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
                    <Form>
                      <Form.Group className="mb-3" controlId="user">
                        <Form.Label className="text-center">
                          Email
                        </Form.Label>
                        <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />
                      </Form.Group>
                      <p style={{ color: 'red' }}>{user ? "" : "Please enter email !"}</p>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      <p style={{ color: 'red' }}>{password ? "" : "Please enter password !"}</p>
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
                        <button class="button" onClick={handleLogin}>
                          Login
                          <div class="hoverEffect">
                            <div>
                            </div>
                          </div></button>
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

