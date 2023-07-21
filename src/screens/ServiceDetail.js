import { Container, Row, Col, Table } from "react-bootstrap";
import { Link ,useParams} from "react-router-dom";
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
   var url = "http://localhost:8080/api/Service/Service/GetServiceById/"+param.id;
   console.log(url)
    fetch(url) // Đổi đường dẫn API tương ứng
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => console.error(error));

    // let url = `http://localhost:8080/api/Category/Category/listCategory`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setListCate(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <UserTemplate>
      <main id="main">
        {/* Breadcrumbs Section */}
        <section className="breadcrumbs">
          <Container fluid>
            {/* <Row>
              <Col md={12}>
                <Row>
                  {listCate.map((c) => (
                    <Col md={2} key={c.categoryId}>
                      <div className="frame">
                        <Link to={`servicesbycategory?cid=${c.categoryId}`}>
                          <button name="cate" value={c.categoryId} className="custom-btn btn-5">
                            <span>{c.categoryName}</span>
                          </button>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row> */}
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <Container className="mt-5 align-items-center">
                  <Row>
                    <Col>
                      {/* Post content */}
                      <article>
                        {/* Post header */}
                        <header className="mb-4">
                          {/* Post title */}
                          <h1 className="fw-bolder mb-1">{service.title}</h1>
                          <br/>
                          <i>
                            <h3 className="fw-bolder mb-1">{service.bi}</h3>
                          </i>
                          {/* Post meta content */}
                          {/* Post categories */}
                        </header>
                        {/* Preview image figure */}
                        <figure className="mb-4">
                          {/* <img className="img-fluid rounded" src="assets/img/mat.jpg" alt="..." /> */}
                          <img
                            id="main-img"
                            className="imagebig img-fluid rounded"
                            src={service.imagelink}
                            alt="..."
                          />
                        </figure>
                        {/* Post content */}
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
                        {/* <h1>Service description:</h1> */}
                        <p> {service.detail}</p>
                      </article>
                      {/* Comments section */}
                      {/* <section className="mb-5">
                        <div className="card bg-light">
                          <div className="card-body">
                            Comment form
                            <form className="mb-4">
                              <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Join the discussion and leave a comment!"
                              ></textarea>
                            </form>
                            Comment with nested comments
                            <div className="d-flex mb-4">
                              Parent comment
                              <div className="flex-shrink-0">
                                <img
                                  className="rounded-circle"
                                  src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                  alt="..."
                                />
                              </div>
                              <div className="ms-3">
                                <div className="fw-bold">Commenter Name</div>
                                If you're going to lead a space frontier, it has
                                to be government; it'll never be private
                                enterprise. Because the space frontier is
                                dangerous, and it's expensive, and it has
                                unquantified risks. Child comment 1
                                <div className="d-flex mt-4">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="rounded-circle"
                                      src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <div className="fw-bold">
                                      Commenter Name
                                    </div>
                                    And under those conditions, you cannot
                                    establish a capital-market evaluation of
                                    that enterprise. You can't get investors.
                                  </div>
                                </div>
                                Child comment 2
                                <div className="d-flex mt-4">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="rounded-circle"
                                      src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <div className="fw-bold">
                                      Commenter Name
                                    </div>
                                    When you put money directly to a problem, it
                                    makes a good headline.
                                  </div>
                                </div>
                              </div>
                            </div>
                            Single comment
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  className="rounded-circle"
                                  src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                  alt="..."
                                />
                              </div>
                              <div className="ms-3">
                                <div className="fw-bold">Commenter Name</div>
                                When I look at the universe and all the ways the
                                universe wants to kill us, I find it hard to
                                reconcile that with statements of beneficence.
                              </div>
                            </div>
                          </div>
                        </div>
                      </section> */}
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
