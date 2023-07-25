import { Card, Col, Container, Row } from "react-bootstrap";

import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import UserTemplate from "../templates/UserTemplate";
import { toast } from "react-toastify";

export default function AddService() {
  let [title, settitle] = useState("");
  let [bi, setbi] = useState("");
  let [price, setprice] = useState(0);
  let [discount, setdiscount] = useState(0);
  let [detail, setdetail] = useState("");
  let [vote, setvote] = useState(0);
  let [imagelink, setimagelink] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Tăng giá trị ngày lên 1 để lấy ngày tiếp theo
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  let AddnewService = () => {
    if (title === "" || title.length < 5) {
      toast.error("title should be at least 5 characters");
      return;
    }
    if (bi === "" || bi.length < 5) {
      toast.error("bio should be at least 5 characters");
      return;
    }
    console.log("price " + price);
    if (price < 0 ) {
      toast.error("price must be a positive integer");
      return;
    }
    if (discount < 0) {
      toast.error("discount must be a positive integer");
      return;
    }
    if (detail === "" || detail.length < 5) {
      toast.error("detail should be at least 5 characters");
      return;
    }
    if (  vote < 0 || vote > 5) {
      toast.error("vote must be a positive integer and max 5");
      return;
    }
    if (imagelink === "" || imagelink.length < 25) {
      toast.error("imagelink should be at least 25 characters");
      return;
    }

    let data = {
      title: `${title}`,
      bi: `${bi}`,
      createddate: getCurrentDate(),
      categoryid: parseInt(categoryRef.current.value, 10),
      price: `${price}`,
      discount: `${discount}`,
      detail: `${detail}`,
      vote: `${vote}`,
      imagelink: `${imagelink}`,
      status: parseInt(statusRef.current.value, 10),
    };
    Axios.post(
      "http://localhost:8080/api/Service/Service/listservices/addservice",
      data
    )
      .then((response) => {
        if (response.data.status == 202 || response.data.status == 200) {
          toast.success("Add ok");
        }
        // console.log(response.data);
      })
      .catch((error) => {
        toast.error("Add not ok");
        console.error(error);
      });
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    let url = `http://localhost:8080/api/Category/Category/listCategory`;
    Axios.get(url)
      .then((response) => {
        setCategory(response.data);
        // console.log(response.data);
      })
      .catch((error) => {});
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setCategory(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  });
  const statusRef = useRef(null);
  const categoryRef = useRef(1);
  return (
    <UserTemplate>
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => settitle(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setbi(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupUsername"
                      >
                        <Form.Label>
                          Created date
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          onChange={(e) => setcreateddate(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupUsername"
                      >
                        <Form.Label>
                          categoryid
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>

                        <Form.Control
                          ref={categoryRef}
                          as="select"
                          className="form-control mb-3"
                        >
                          {category.map((s) => (
                            <option key={s.categoryId} value={s.categoryId}>
                              {s.categoryName}
                            </option>
                          ))}
                        </Form.Control>
                        {/* 
                        {category.map((s) => (
                          <React.Fragment key={s.categoryId}>
                            <Button
                              variant="outline-primary "
                              onClick={() => setcategoryid(s.categoryId)}
                            >
                              {s.categoryName}
                            </Button>
                            <br />
                          </React.Fragment>
                        ))} */}
                        {/* <Form.Control
                          type="text"
                          onChange={(e) => setcategoryid(e.target.value)}
                        /> */}
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          defaultValue={0}
                          onChange={(e) => setprice(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          defaultValue={0}
                          onChange={(e) => setdiscount(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setdetail(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          defaultValue={0}
                          min={0}
                          max={5}
                          onChange={(e) => setvote(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setimagelink(e.target.value)}
                        />
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
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>

                        <Form.Control
                          ref={statusRef}
                          as="select"
                          className="form-control mb-3"
                        >
                          <option key="1" value="1">
                            Active
                          </option>
                          <option key="1" value="1">
                            Block
                          </option>
                        </Form.Control>

                        {/* <Form.Control
                          type="text"
                          onChange={(e) => setstatus(e.target.value)}
                        /> */}
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
                  <Button style={{ background: "red" }} variant="primary">
                    Back
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserTemplate>
  );
}
