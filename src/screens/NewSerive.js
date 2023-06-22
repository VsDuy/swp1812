import { Card, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function AddService() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const nav = useNavigate();
    const handleLogin = () => {
        if (user && password && fname  && phone && email) {
            alert("Add Successfull");
            nav('manager_service');
        }
    }
    return (

        <Container class="container">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">

                        <Card.Header style={{ background: "#eee" }}>
                            <Card.Title>ADD Service</Card.Title>
                        </Card.Header>

                        <Card.Body>

                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                                Thumbnail
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />

                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupPassword"
                                        >
                                            <Form.Label>
                                                Title
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupFullName"
                                        >
                                            <Form.Label>
                                                Category
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) => setFname(e.target.value)} />
                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupEmail"
                                        >
                                            <Form.Label>
                                                Price
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupPhone"
                                        >
                                            <Form.Label>
                                                Sale Price
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) => setPhone(e.target.value)} />
                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupCountry"
                                        >
                                            <Form.Label>
                                                Status
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form>
                                                <Form.Check // prettier-ignore
                                                    type="switch"
                                                    id="custom-switch"
                                                    label="Checked switch checkbox input"
                                                />
                                                
                                            </Form>
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                            </Form>
                        </Card.Body>

                        <Card.Footer
                            style={{
                                background: "#eee",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Button onClick={handleLogin} style={{ background: "green" }}>


                                Add

                            </Button>
                            <Link to="/">
                                <Button
                                    style={{ background: "red" }}
                                    variant="primary"
                                >
                                    Back
                                </Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>



    );
}