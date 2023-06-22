import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from 'react';


export default function ManagerServiceList() {
    const [service, setService] = useState([]);
    return (
        <UserTemplate>
            <Button variant="outline-success" href="add_service">Add new</Button>{' '}<br></br>
            <Row>

                <Col xs={12} style={{ textAlign: "center" }}>
                    <h2>MANAGER SERVICE LIST</h2>
                </Col>

            </Row>
            <Row>
                <Col xs={4}>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        disabled
                        readOnly
                    />


                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter search title..."
                            aria-label="Enter search title..."

                        />
                        <Button  >
                            Go!
                        </Button>
                    </InputGroup>


                    <Form.Control
                        type="text"
                        placeholder="Caterory services manager"
                        disabled
                        readOnly

                    />
                    <Button variant="outline-primary">Eyes    </Button>{' '}<br></br>
                    <Button variant="outline-secondary" href="#">Mouth</Button>{' '}<br></br>
                    <Button variant="outline-success" href="#">Back</Button>{' '}<br></br>
                    <Button variant="outline-danger" href="#">Nose</Button>{' '}<br></br>
                    <Button variant="outline-info" href="#">Foot</Button>{' '}<br></br>
                    <Button variant="outline-light" href="#"></Button>{' '}<br></br>



                    <Form.Control
                        type="text"
                        placeholder="Sorf services"
                        disabled
                        readOnly
                    />
                    <button id="b">Sort by price</button><br></br>
                    <button id="b">Sort by discount price</button><br></br>
                </Col>

                <Col xs={8}>

                    <Row>

                        <Col xs={12}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Thumbnail</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Sale Price</th>
                                        <th colSpan={4}>Status</th>
                                    </tr>
                                    <tbody>
                                    {service.map((s) => (
                                        <tr key={s.id}>
                                            <td>{s.id}</td>
                                            <td>{s.thumbnail}</td>
                                            <td>{s.titler}</td>
                                            <td>{s.category}</td>
                                            <td>{s.price}</td>
                                            <td>{s.sale_price}</td>
                                            <td>
                                                <a href="">
                                                    <PencilSquare />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="">
                                                    <Trash3Fill />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                      </tbody>
                                </thead>

                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>



        </UserTemplate>
    );
}


