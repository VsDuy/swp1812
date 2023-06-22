import { Card, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function RegisterScreen() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const nav = useNavigate();
    const handleLogin = () => {
        if (user && password && fname && address && phone && city && email ) {
            alert("Register Successfull");
            nav('/');
        }   
    }
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
                            
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                                Username 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e)=>setUser(e.target.value)}/>
                                            
                                        </Form.Group>
                                        <p style={{color:'red'}}>{user ? "" : "Please enter username"}</p>
                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupPassword"
                                        >
                                            <Form.Label>
                                                Password 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}/>
                                            
                                        </Form.Group>
                                        <p style={{color:'red'}}>{password ? "" : "Please enter password"}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupFullName"
                                        >
                                            <Form.Label>
                                                Fullname 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e)=>setFname(e.target.value)}/>
                                        </Form.Group>
                                        <p style={{color:'red'}}>{fname ? "" : "Please enter Fullname"}</p>
                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupEmail"
                                        >
                                            <Form.Label>
                                                Email 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e)=>setEmail(e.target.value)}/>
                                        </Form.Group>
                                        <p style={{color:'red'}}>{fname ? "" : "Please enter Fullname"}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupPhone"
                                        >
                                            <Form.Label>
                                                Phone 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e)=>setPhone(e.target.value)}/>
                                        </Form.Group>
                                        <p style={{color:'red'}}>{phone ? "" : "Please enter NumberPhone"}</p>
                                    </Col>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupCountry"
                                        >
                                            <Form.Label>
                                                Country 
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Select required>
                                                <option value="1">
                                                    Vietnam
                                                </option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <p style={{color:'red'}}>{city ? "" : "Please choose Country"}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupAddress"
                                        >
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" onChange={(e)=>setAddress(e.target.value)}/>
                                        </Form.Group>
                                        <p style={{color:'red'}}>{address ? "" : "Please enter Address"}</p>
                                    </Col>
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
                               
                                
                          Login
                        
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