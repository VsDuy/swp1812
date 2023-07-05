import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from 'react';

export default function Service() {
    const [listService, setListService] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8000/services").then(res => res.json())
            .then(result => {
                setListService(result);
            });
    },
        []);
    return (
        <UserTemplate>
            <Row>
                <button class="button">
                    <span class="button-content">Eyes</span>
                </button><button class="button">
                    <span class="button-content">Mouth </span>
                </button><button class="button">
                    <span class="button-content">Foot </span>
                </button><button class="button">
                    <span class="button-content">Nose </span>
                </button><button class="button">
                    <span class="button-content">Back </span>
                </button><button class="button">
                    <span class="button-content">Body </span>
                </button>
           
     
                <Col xs={12}>
                <Table  >

                    <tbody >
                        {listService.map((p) => (
                            <tr key={p.id}>
                                <tr>{p.id}</tr>
                                <tr>{p.name}</tr>
                                <tr>{p.vote}</tr>
                                <tr>{p.re_name}</tr><br></br>
                                <td>{p.price}</td><br></br>
                          <Button variant="outline-success" href="add_service">Details Service</Button>{' '}<br>
                          </br>
                          <Button variant="outline-success" href="add_service">Book Service</Button>{' '}
                            </tr>
                          
                          
                        ))
                        }
                    </tbody>



                </Table>
                </Col>
            </Row>

        </UserTemplate>
    );
}
