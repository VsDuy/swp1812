import { Container, Row, Col, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/serviceDetail.css"; // Import tệp CSS vào đây
 
export default function ServiceDetail() {
  const [service, setService] = useState({});
  const [listCate, setListCate] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const quantityRef = useRef(null);
  const numOfPersonRef = useRef(null);
  const doctorRef = useRef(null);
  const nurseRef = useRef(null);
  const slotRef = useRef(null);
  const dateRef = useRef(null);
  const [doctor, setDoctor] = useState([]);
  const [nurse, setNurse] = useState([]);
  const param = useParams();
  // Đoạn mã lấy dữ liệu service và listCate từ server
  useEffect(() => {
    // Gọi API để lấy dữ liệu service và listCate từ server
    // Ví dụ:
    var url =
      "http://localhost:8080/api/Service/Service/GetServiceById/" + param.id;
    console.log(url);
    fetch(url) // Đổi đường dẫn API tương ứng
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => console.error(error));
      fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/ccg1/users/role/2"
      ); // Thay 'URL_API' bằng URL API thực tế
      setDoctor(response.data);
    } catch (error) {
      console.error("Error fetching data role: ", error);
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/api/ccg1/users/role/3"
      ); // Thay 'URL_API' bằng URL API thực tế
      setNurse(response.data);
    } catch (error) {
      console.error("Error fetching data role: ", error);
    }
  };
  const handleOrder = () => {
    handleShow(); // Mở modal sau khi đã cập nhật selectedServiceId
  };
  const handleSaveChanges = (event) => {
    event.preventDefault(); // Ngăn form tự động submit

    const serviceId = service.service_id;
    const priceService = service.price;
    const title = service.title;
    const quantity = parseInt(quantityRef.current.value, 10);
    const numOfPerson = parseInt(numOfPersonRef.current.value, 10);
    const selectedDoctor = parseInt(doctorRef.current.value, 10);
    const selectedNurse = parseInt(nurseRef.current.value, 10);
    const selectedSlot = parseInt(slotRef.current.value, 10);
    const price = parseInt(service.price);
    const dateBook = dateRef.current.value;

    handleOrderService(
      serviceId,
      title,
      quantity,
      numOfPerson,
      selectedDoctor,
      selectedNurse,
      selectedSlot,
      price,
      dateBook,
      priceService
    );
  };
  const handleOrderService = async (
    serviceId,
    title,
    quantity,
    numOfPerson,
    selectedDoctor,
    selectedNurse,
    selectedSlot,
    price,
    dateBook,
    priceService
  ) => {
    // Lấy danh sách các serviceId từ Local Storage (nếu có)
    const storedService = JSON.parse(localStorage.getItem("Service"));
    var listCart = JSON.parse(localStorage.getItem("Service"));
    var cartId = 1;
    if (listCart != null) {
      cartId =
        listCart.reduce(
          (maxId, item) => (item.cartId > maxId ? item.cartId : maxId),
          0
        ) + 1;
    }
    if (listCart === null) {
      listCart = [];
    }
    if (dateBook < getCurrentDate()) {
      toast.error("Cannot set past date");
      return;
    }
    var cartItem = {
      cartId: cartId,
      serviceId: serviceId,
      title: title,
      quantity: quantity,
      numOfPerson: numOfPerson,
      doctor: selectedDoctor,
      nurse: selectedNurse,
      slot: selectedSlot,
      price: price * quantity,
      priceService: priceService,
      userId: 1,
      beginTime: dateBook,
    };

    try {
      const response = await axios.put(
        "http://localhost:8080/api/ccg1/reservation/checkCart",
        cartItem
      ); // Thay 'URL_API' bằng URL API thực tế
      console.log(response.data);
      if (response.data === 1) {
        toast.error("Looks like the doctor or nurse already has this schedule");
        return;
      } else {
      }
    } catch (error) {
      return;
    }

    const existingItem = listCart.find(
      (item) =>
        (item.cartId !== cartItem.cartId &&
          item.beginTime === cartItem.beginTime &&
          item.serviceId === serviceId &&
          item.slot === selectedSlot)
        || (item.beginTime === cartItem.beginTime
          && item.slot === selectedSlot
          && (item.doctor === selectedDoctor || item.nurse === selectedNurse))
    );
    if (existingItem) {
      toast.error("Can't set repeat slot or doctor,nurse in slot  on same day");
    } else {
      listCart.push(cartItem);
      if (!storedService) {
        localStorage.setItem("Service", JSON.stringify(listCart));
      } else {
        const updatedService = [...storedService, cartItem];
        localStorage.setItem("Service", JSON.stringify(updatedService));
      }
      handleClose(); // Đóng modal sau khi đã lưu thay đổi
      toast.success("Appointment successful");
    } 
  };
  const getCurrentDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Tăng giá trị ngày lên 1 để lấy ngày tiếp theo
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };
  const handleImageError = (e) => {
    e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBONcJOzAAsu-WtDfk0Sr3QNGcTSnonIpRBQ&usqp=CAU'; // Thay thế bằng đường dẫn của ảnh mặc định (abc.jpg)
  };
  return (
    <UserTemplate>
      <Form name="formData" onSubmit={handleSaveChanges}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Service</Modal.Title>

            <Button variant="secondary" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <label>Quantity</label>
            <Form.Control
              type="number"
              ref={quantityRef}
              name="quantity"
              placeholder="Quantity"
              className="mb-3"
              defaultValue={1}
              min={1}
              step={1}
            />
            <label>Date </label>
            <Form.Control
              type="date"
              ref={dateRef}
              name="dateBook"
              placeholder="Quantity"
              className="mb-3"
              defaultValue={getCurrentDate()} // Đặt giá trị mặc định là ngày/tháng/năm hiện tại
              min={getCurrentDate()} // Không cho phép chọn ngày quá khứ
            />
            <label>Number Of Person</label>
            <Form.Control
              type="number"
              ref={numOfPersonRef}
              name="numOfPerson"
              placeholder="Number Of Person"
              className="mb-3"
              defaultValue={1}
              min={1}
              step={1}
            />
            <label>Doctor</label>
            <Form.Control
              as="select"
              ref={doctorRef}
              name="selectedDoctor"
              className="form-control mb-3"
            >
              {doctor.map((doctor) => (
                <option key={doctor.userID} value={doctor.userID}>
                  {doctor.name}
                </option>
              ))}
            </Form.Control>
            <label>Nurse</label>
            <Form.Control
              as="select"
              ref={nurseRef}
              name="selectedNurse"
              className="form-control mb-3"
            >
              {nurse.map((nurse) => (
                <option key={nurse.userID} value={nurse.userID}>
                  {nurse.name}
                </option>
              ))}
            </Form.Control>
            <label>Slot</label>
            <Form.Control
              as="select"
              ref={slotRef}
              name="selectedSlot"
              className="form-control mb-3"
            >
              <option key={1} value={1}>
                1
              </option>
              <option key={2} value={2}>
                2
              </option>
              <option key={3} value={3}>
                3
              </option>
              <option key={4} value={4}>
                4
              </option>
            </Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSaveChanges}>
              Add Service
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
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
                              onError={handleImageError}
                              src={service.imagelink}
                              alt="..."
                            />
                          </figure>
                        </div>
                        <section style={{ marginRight: "610px" }}>
                          <p>
                            Rate star: {service.rateStar}/5{" "}
                            <i
                              style={{ color: "yellow" }}
                              className="bi bi-star-fill"
                            ></i>
                          </p>
                          <p
                             
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
                      <button 
                         onClick={() => handleOrder()}
                         variant="outline-success"
                         data-toggle="modal"
                         data-target="#exampleModal"
                      className="btn btn-outline-success float-right">
                        Add
                      </button>
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
