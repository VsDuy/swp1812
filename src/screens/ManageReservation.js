import React, { useEffect, useState } from "react";
import UserTemplate from "../templates/UserTemplate";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ManagerReservation() {
  const [status, setStatus] = useState(-1);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [status]);

  const handleSearch = () => {
    let url = `http://localhost:8080/api/ccg1/reservations`;
     
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (status !== -1) {
          // Chỉ lấy các đặt chỗ có trạng thái (status) bằng status được chọn
          const filteredReservations = result.filter(
            (item) => item.reservationStatus === status
          );
          console.log(filteredReservations);
          setReservations(filteredReservations);
        } else {
          // Hiển thị toàn bộ danh sách nếu status = -1 (chọn All)
          setReservations(result);
        }
        // console.log(result);
        // setReservations(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Lưu ý tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatStatus = (s) => {
    if(s == 0){
        return "Waiting"
    }
    if(s == 1){
        return "Complete"
    }
    if(s == 2){
        return "Cancelled"
    }
  };


  return (
    <UserTemplate>
      <Container>
        <div className="bg-white  shadow p-5">
          <Row className="mb-3">
            <Col xs={12}>
              <span>Filter</span>
              <div className="d-flex">
                <Form.Control
                  as="select"
                  name="selected"
                  className="form-control mb-3 w-25"
                  value={status}
                  onChange={(e) => setStatus(Number(e.target.value))}
                >
                  <option value={-1}>All</option>
                  <option value={0}>Waiting</option>
                  <option value={1}>Complete</option>
                  <option value={2}>Cancelled</option>
                </Form.Control>
              </div>

              <h3 className="text-dark text-center">Reservation Manager</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="table-striped">
                <thead>
                  <tr>
                    <th>Reservation ID</th>
                    <th>Created Date</th>
                    {/* <th>Note</th> */}
                    <th>Status</th>
                    <th>Total Price</th>
                    <th>Email Guest</th>
                    <th>Action</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((p, index) => (
                    <tr key={p.reservationID}>
                      <td>{index+1}</td>
                      <td>{formatDate(p.createdDate)}</td>
                      {/* <td>{p.note}</td> */}
                      <td>{formatStatus(p.reservationStatus)}</td>
                      <td>{p.totalPrice} $</td>
                      <td>{p.userGuess}</td>
                      <td>
                        <Link
                          className="nav-link btn btn-outline-warning"
                          to={`/manager_reservation_detail/`+p.reservationID}
                        >
                          {" "}
                          Detail
                        </Link>
                      </td>
                      {/* <td>
                        <button className="btn btn-outline-danger">
                          Cancel
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </UserTemplate>
  );
}
