import React from 'react'
import UserTemplate from "../templates/UserTemplate";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";


const ManageReservation = () => {
    return (
        <UserTemplate>
            <Container>
                <div className='bg-white vh-100 shadow p-5'>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <span>Filter</span>
                            <div className='d-flex'>
                                <Form.Control
                                    as="select"
                                    name="selected"
                                    className="form-control mb-3 w-25"
                                >
                                    <option>
                                        Status 1
                                    </option>
                                    <option>
                                        Status 2
                                    </option>
                                    <option>
                                        Status 2
                                    </option>
                                </Form.Control>

                                <Form.Control
                                    as="select"
                                    name="selected"
                                    className="form-control mb-3 w-25"
                                >
                                    <option>
                                        Date 1
                                    </option>
                                    <option>
                                        Date 2
                                    </option>
                                    <option>
                                        Date 3
                                    </option>
                                </Form.Control>
                            </div>

                            <h3 className="text-dark text-center">Reservation</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className='table-striped'>
                                <thead>
                                    <tr>
                                        <th>Reservation ID</th>
                                        <th>Created Date</th>
                                        <th>Note</th>
                                        <th>Status</th>
                                        <th>Total Price</th>
                                        <th>User ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>ok</td>
                                        <td>enable</td>
                                        <td>$ 1000</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>ok</td>
                                        <td>enable</td>
                                        <td>$ 1000</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>ok</td>
                                        <td>enable</td>
                                        <td>$ 1000</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Container>
        </UserTemplate>
    )
}

export default ManageReservation