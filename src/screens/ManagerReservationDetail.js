import React from 'react'
import UserTemplate from "../templates/UserTemplate";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

const ManagerReservationDetail = () => {
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
                                    className="form-control mb-3"
                                >
                                    <option>
                                        Slot 1
                                    </option>
                                    <option>
                                        Slot 2
                                    </option>
                                    <option>
                                        Slot 2
                                    </option>
                                </Form.Control>

                                <Form.Control
                                    as="select"
                                    name="selected"
                                    className="form-control mb-3"
                                >
                                    <option>
                                        Doctor 1
                                    </option>
                                    <option>
                                        Doctor 2
                                    </option>
                                    <option>
                                        Doctor 3
                                    </option>
                                </Form.Control>
                                <Form.Control
                                    as="select"
                                    name="selected"
                                    className="form-control mb-3"
                                >
                                    <option>
                                        Nurse 1
                                    </option>
                                    <option>
                                        Nurse 2
                                    </option>
                                    <option>
                                        Nurse 3
                                    </option>
                                </Form.Control>
                                <Form.Control
                                    as="select"
                                    name="selected"
                                    className="form-control mb-3"
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
                            <div className='d-flex'>
                                <button className='btn btn-outline-success'>Filte By Price</button>
                                <Form.Control
                                    type="number"
                                    placeholder="pice start"
                                    className='w-25'
                                />
                                <Form.Control
                                    type="number"
                                    placeholder="pice end"
                                    className='w-25'

                                />
                            </div>

                            <h3 className="text-dark text-center">Reservation</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className='table-striped'>
                                <thead>
                                    <tr>
                                        <th>Reservation Detail ID</th>
                                        <th>Begin Time</th>
                                        <th>Doctor ID</th>
                                        <th>Num Of Person</th>
                                        <th>NurseID</th>
                                        <th>Quantity</th>
                                        <th>Slot</th>
                                        <th>UserrID</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>
                                            <button className='btn btn-outline-warning'>Detail</button>

                                        </td>
                                        <td>
                                            <button className='btn btn-outline-danger'>Cancel</button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>
                                            <button className='btn btn-outline-warning'>Detail</button>

                                        </td>
                                        <td>
                                            <button className='btn btn-outline-danger'>Cancel</button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12/12/2020</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>
                                            <button className='btn btn-outline-warning'>Detail</button>

                                        </td>
                                        <td>
                                            <button className='btn btn-outline-danger'>Cancel</button>
                                        </td>

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

export default ManagerReservationDetail