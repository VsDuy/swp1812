import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export default function Service() {
  const [show, setShow] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState({});
  const [doctor, setDoctor] = useState([]);
  const [nurse, setNurse] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quantityRef = useRef(null);
  const numOfPersonRef = useRef(null);
  const doctorRef = useRef(null);
  const nurseRef = useRef(null);
  const slotRef = useRef(null);

  // Hàm xử lý sự kiện khi người dùng nhấn vào nút "Đặt dịch vụ"
  const handleOrder = (p) => {
    setSelectedServiceId(p); // Lưu trữ service_id của phần tử được chọn
    handleShow(); // Mở modal sau khi đã cập nhật selectedServiceId
  };
  const handleSaveChanges = (event) => {
    event.preventDefault(); // Ngăn form tự động submit

    const serviceId = selectedServiceId.service_id;
    const title = selectedServiceId.title;
    const quantity = parseInt(quantityRef.current.value, 10);
    const numOfPerson = parseInt(numOfPersonRef.current.value, 10);
    const selectedDoctor = parseInt(doctorRef.current.value, 10);
    const selectedNurse = parseInt(nurseRef.current.value, 10);
    const selectedSlot = parseInt(slotRef.current.value, 10);
    const price = parseInt(selectedServiceId.price)
    handleOrderService(serviceId, title, quantity, numOfPerson, selectedDoctor, selectedNurse, selectedSlot, price);
    handleClose(); // Đóng modal sau khi đã lưu thay đổi
  };
  const handleOrderService = (serviceId, title, quantity, numOfPerson, selectedDoctor, selectedNurse, selectedSlot, price) => {
    // Lấy danh sách các serviceId từ Local Storage (nếu có)
    const storedService = JSON.parse(localStorage.getItem('Service'));
    var listCart = JSON.parse(localStorage.getItem('Service'));

    if (listCart === null) {
      listCart = []
    }
    var cartItem = {
      cartId: listCart.length + 1,
      serviceId: serviceId,
      title: title,
      quantity: quantity,
      numOfPerson: numOfPerson,
      doctor: selectedDoctor,
      nurse: selectedNurse,
      slot: selectedSlot,
      price: price,
    }
    listCart.push(cartItem);
    if (!storedService) {
      localStorage.setItem('Service', JSON.stringify(listCart));
    } else {
      const updatedService = [...storedService, cartItem];
      localStorage.setItem('Service', JSON.stringify(updatedService));
    }
  };
  useEffect(() => {
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
  }
  let [searchcategory, setSearchcategory] = useState(-1);
  const [service, setService] = useState([]);
  const [category, setCategory] = useState([]);
  const [servicePage, setServicePage] = useState([]);
  let [currentpage, setcurrentpage] = useState(1);
  const pagesize = 10;
  useEffect(() => {
    let url = `http://localhost:8080/api/Category/Category/listCategory`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      })
      .catch((error) => {
        console.error(error);
      });

  });

  useEffect(() => {

    setcurrentpage(1);
    handleSearch();
  }, [searchcategory]);

  useEffect(() => {
    handleSearch();
  }, [currentpage]);

  const handleSearch = () => {
    let url = `http://localhost:8080/api/Service/Service/listservices/-1/none/none/${searchcategory}/-1/${currentpage}/${pagesize}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setService(result.listServices);
      })
      .catch((error) => {
        console.error(error);
      });
    handlePage()
  };
  // var page = servicePage.length / pagesize;
  // if(servicePage.length % pagesize ==0){
  //   // eslint-disable-next-line no-unused-vars
  //   page ++;
  // }
  const totalPage = Math.ceil(servicePage.length / pagesize);
  const numbers = Array.from(Array(totalPage).keys()); // Tạo mảng từ 0 đến 10
  const handlePage = () => {
    let url = `http://localhost:8080/api/Service/Service/countService/${searchcategory}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setServicePage(result.listServices);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleImageError = (e) => {
    e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBONcJOzAAsu-WtDfk0Sr3QNGcTSnonIpRBQ&usqp=CAU'; // Thay thế bằng đường dẫn của ảnh mặc định (abc.jpg)
  };
  return (
    <UserTemplate>
      <Row>
        <Col xs={12}>
          <Button
            variant="outline-primary"
            onClick={() => setSearchcategory(-1)}
          >
            <span class="button-content">All</span>
          </Button>
          {category.map((s) => (
            <Button
              variant="outline-primary"
              onClick={() => setSearchcategory(s.categoryId)}
              key={s.categoryId}
            >
              <span class="button-content">{s.categoryName}</span>
            </Button>
          ))}
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Table>
            <tbody>
              {service.map((p) => (
                <tr key={p.service_id}>
                  <td>{p.title}</td>
                  <td>{p.bi}</td>
                  <td>{p.price}</td>
                  <td>{p.re_name}</td>
                  <td>
                    <img src={p.imagelink} onError={handleImageError} alt="Service Image" />
                  </td>
                  <td>

                    <Link to={`/service_detail/${p.service_id}`}>
                      <Button variant="outline-success">Chi tiết dịch vụ</Button></Link>
                    {" "}
                  </td>
                  <td>
                    <Button onClick={() => handleOrder(p)} variant="outline-success" data-toggle="modal" data-target="#exampleModal">
                      Đặt dịch vụ
                    </Button>{" "}
                    <Form name="formData" onSubmit={handleSaveChanges}>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
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

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          {totalPage === 1 ? (
            <span></span>
          ) : (
            numbers.map((number) => (
              <React.Fragment key={number}>
                <Button className={number + 1 === currentpage ? "btn-dark" : ""}
                  onClick={() => setcurrentpage(number + 1)}>
                  {number + 1}
                </Button>
                {<span className="mx-0"></span>} {/* Thêm khoảng trống giữa các nút */}
              </React.Fragment>
            ))
          )}
        </Col>
      </Row>

    </UserTemplate>
  );
}
