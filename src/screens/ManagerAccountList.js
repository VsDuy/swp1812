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
              <Dropdown.Item href="#">Admin</Dropdown.Item>
              <Dropdown.Item href="#">Doctor</Dropdown.Item>
              <Dropdown.Item href="#">Manager</Dropdown.Item>
              <Dropdown.Item href="#">Customer</Dropdown.Item>
              <Dropdown.Item href="#">Nurse</Dropdown.Item>
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

              <div className="col-12 col-sm-6 product">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-sm-6 product">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-sm-6 product">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-sm-6 product">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>



            </div>


          </div>
        </Col>
      </Row>
    </UserTemplate>
  );
}


