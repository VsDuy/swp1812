import { Card, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function AddService() {
    let [title, settitle] = useState("");
    let [bi, setbi] = useState("");
    let [createddate, setcreateddate] = useState("");
    let [categoryid, setcategoryid] = useState("");
    let [price, setprice] = useState("");
    let [discount, setdiscount] = useState("");
    let [detail, setdetail] = useState("");
    let [vote, setvote] = useState("");
    let [imagelink, setimagelink] = useState("");
    let [status, setstatus] = useState("");
   

    let AddnewService = () => {
        let data = {
            title: `${title}`,
            bi: `${bi}`,
            createddate: `${createddate}`,
            categoryid: `${categoryid}`,
            price:`${price}`,
            discount: `${discount}`,
            detail: `${detail}`,
            vote: `${vote}`,
            imagelink: `${imagelink}`,
            status: `${status}`
        };
        Axios.post(
            "http://localhost:8080/api/Service/Service/listservices/addservice",
            data
        )
            .then((response) => {
                if(response.data.status == 202){
                    alert('Add Ok')
                }
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };



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
                                                Title
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>settitle(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                                Bio
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setbi(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                                Created date
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="date" onChange={(e) =>setcreateddate(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                                categoryid
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setcategoryid(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            price
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setprice(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            discount
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setdiscount(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            detail
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setdetail(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            vote
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setvote(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            imagelink
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setimagelink(e.target.value) } />

                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formGroupUsername"
                                        >
                                            <Form.Label>
                                            status
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control type="text" onChange={(e) =>setstatus(e.target.value) } />

                                        </Form.Group>

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
                            <Button onClick={AddnewService} style={{ background: "green" }}>
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