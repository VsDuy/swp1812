import { Container, Row, Col, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlignCenter, PencilSquare, TextCenter, Trash3Fill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Dropdown } from "react-bootstrap";
import UserTemplate from "../templates/UserTemplate";


export default function ManagerAccountList() {
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
          <div className="container-fluid col-8">

            <h3 className="row" style={{ textAlign: "center" }}>List</h3>
            <div className="row content" id="home">

             


            </div>


          </div>
        </Col>
      </Row>
    </UserTemplate>
  );
}


