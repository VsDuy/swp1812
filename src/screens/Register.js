import { Card, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../service/userService";
import { toast } from "react-toastify";

export default function RegisterScreen() {
  const [data, setData] = useState({
    name: "",
    gender: "",
    password: "",
    address: "",
    email: "",
    phone: "",
    roleID: "",
  });

  //const nav = useNavigate();

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const [error, setError] = useState({
    error: {},
    isError: false,
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    //goi api
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Register success");
        setData({
          name: "",
          gender: "",
          password: "",
          address: "",
          email: "",
          phone: "",
          roleID: "",
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("error log");
      });
  };

  return (
    <Container class="container">
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Header style={{ background: "#eee" }}>
              <Card.Title>User Registration</Card.Title>
            </Card.Header>

            <Card.Body>
              <Form onSubmit={submitForm}>
                <Col>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      value={data.name}
                      onChange={(e) => handleChange(e, "name")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="gender">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                      type="text"
                      id="gender"
                      value={data.gender}
                      onChange={(e) => handleChange(e, "gender")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      value={data.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                      type="text"
                      id="address"
                      value={data.address}
                      onChange={(e) => handleChange(e, "address")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      value={data.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      id="phone"
                      value={data.phone}
                      onChange={(e) => handleChange(e, "phone")}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      id="role"
                      value={data.roleID}
                      onChange={(e) => handleChange(e, "roleID")}
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
                    <button class="button" onClick={handleChange}>
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
  );
}
