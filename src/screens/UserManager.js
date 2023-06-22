import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import UserTemplate from "../templates/UserTemplate";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function UserManager() {
    return (
   <Container>
            <button id="c">ADD NEW</button>
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
                    <button id="b">Eyes</button><br></br>
                    <button id="b">Mouth</button><br></br>
                    <button id="b">Foot</button><br></br>
                    <button id="b">Nose</button><br></br>
                    <button id="b">Lung</button><br></br>
                    <button id="b">Body</button><br></br>

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
                                </thead>

                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>



            </Container>
    );
}


