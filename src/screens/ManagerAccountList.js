import { Container, Row, Col, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlignCenter, PencilSquare, TextCenter, Trash3Fill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Dropdown } from "react-bootstrap";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';

export default function ManagerAccountList() {
  const [account, setAccount] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/api/ccg1/users/listUser").then(res => res.json())
      .then(result => {
        setAccount(result);
      });
  },
    []);
  return (
    <UserTemplate>
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
            placeholder="FILTER"
            disabled
            readOnly
          />

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Role
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="list_user">Admin</Dropdown.Item>
              <Dropdown.Item href="list_user">Doctor</Dropdown.Item>
              <Dropdown.Item href="list_user">Manager</Dropdown.Item>
              <Dropdown.Item href="list_user">Customer</Dropdown.Item>
              <Dropdown.Item href="list_user">Nurse</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>



          <Form.Control
            type="text"
            placeholder="Sorf services"
            disabled
            readOnly
          />

        </Col>



        <Col>

          <div className="d-flex justify-content-around">

            <Card style={{ width: '15rem' }}>

              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <tbody>
                    {account.map((c) => (
                      <tr>
                        {c.age}<br></br>
                        {c.name}<br></br>
                        {c.gmail}<br></br>
                        {c.phone}<br></br>
                        {c.job}<br></br>

                      </tr>
                    ))}
                  </tbody>
                </Card.Text>
                <td> <Button variant="primary">View User</Button></td>
                <td> <Button variant="primary">Edit User</Button></td>
              </Card.Body>
            </Card>



          </div>
        </Col>
      </Row>
    </UserTemplate>
  );
}



