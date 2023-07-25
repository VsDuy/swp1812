import { Card, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import UserTemplate from "../templates/UserTemplate";

export default function SignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      toast.success("Register success");
      const data = {
        user: {
          name,
          gender,
          password,
          address,
          email,
          phone,
        },
      };
      axios
        .post("http://localhost:8080/api/ccg1/register", data)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            window.location.href = "/";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError("Passwords do not match.");
    }
  };

  return (
    <UserTemplate>
      <Container class="container">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Header style={{ background: "#eee" }}>
                <Card.Title>SignUp</Card.Title>
              </Card.Header>

              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Col>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="gender">
                      <Form.Label>Gender:</Form.Label>
                      <Form.Control
                        as="select"
                        custom
                        value={gender}
                        onChange={handleGenderChange}
                      >
                        <option value="">Choose option</option>
                        <option value={0}>Female</option>
                        <option value={1}>Male</option>
                        <option value={2}>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="formBasicConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {error && (
                        <Form.Text className="text-danger">{error}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <div>
                    <Card.Footer
                      style={{
                        background: "#eee",
                        justifyContent: "flex-start",
                      }}
                    >
                      <button class="button" variant="primary" type="submit">
                        Register
                        <div class="hoverEffect">
                          <div></div>
                        </div>
                      </button>
                      <Link to="/">
                        <button class="button">
                          Back
                          <div class="hoverEffect">
                            <div></div>
                          </div>
                        </button>
                      </Link>
                    </Card.Footer>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserTemplate>
  );
}
