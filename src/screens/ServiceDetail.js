import { Container, Row, Col, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from "react";
import "../styles/serviceDetail.css"; // Import tệp CSS vào đây

export default function ServiceDetail() {
  const [service, setService] = useState({});
  const [listCate, setListCate] = useState([]);
  const param = useParams()
  // Đoạn mã lấy dữ liệu service và listCate từ server
  useEffect(() => {
    // Gọi API để lấy dữ liệu service và listCate từ server
    // Ví dụ:
    var url = "http://localhost:8080/api/Service/Service/GetServiceById/" + param.id;
    console.log(url)
    fetch(url) // Đổi đường dẫn API tương ứng
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <UserTemplate>
      <main id="main">
        <section className="breadcrumbs">
          <Container fluid className="bg-white w-75 shadow p-5">
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <Container className="mt-5 align-items-center">
                  <Row>
                    <Col>
                      <article>
                        <div>
                          <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{service.title}</h1>
                            <br />
                            <i>
                              <h3 className="fw-bolder mb-1">{service.bi}</h3>
                            </i>
                          </header>
                          <figure className="mb-4">
                            <img
                              id="main-img"
                              className="imagebig img-fluid rounded"
                              src={service.imagelink}
                              alt="..."
                            />
                          </figure>
                        </div>
                        <section
                          style={{ marginRight: "610px" }}
                        >
                          <p>
                            Rate star: {service.rateStar}/5{" "}
                            <i style={{ color: "yellow" }}
                              className="bi bi-star-fill"
                            ></i>
                          </p>
                          <p
                            style={{ marginRight: "50px" }}
                            className="fs-5 mb-4"
                          >
                            Old Price: {service.price}$
                          </p>
                          <p className="fs-5 mb-4">
                            Discount Price:{" "}
                            <i className="text-danger">{service.discount}$</i>
                          </p>
                          <p className="fs-5 mb-4"> </p>
                        </section>
                        <p> {service.detail}</p>
                      </article>
                      <button className="btn btn-outline-success float-right">Add</button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </section>
      </main>
    </UserTemplate>
  );
}
