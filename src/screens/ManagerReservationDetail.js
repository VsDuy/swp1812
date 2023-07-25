import React, { useEffect, useState } from "react";
import UserTemplate from "../templates/UserTemplate";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ManagerReservationDetail() {
  const param = useParams();
  const [reservationsDetail, setReservationDetails] = useState([]);
  //   handleSearch()

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    let url = `http://localhost:8080/api/ccg1/reservationDetail/` + param.id;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setReservationDetails(result);
        console.log(result);
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
  return (
    <UserTemplate>
      <Container>
        <div className="bg-white vh-100 shadow p-5">
          <Row className="mb-3">
            <Col xs={12}>
              <h3 className="text-dark text-center">Reservation Detail</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="table-striped">
                <thead>
                  <tr>
                    <th>Reservation Detail ID</th>
                    <th>Begin Time</th>
                    <th>Doctor </th>
                    <th>Nurse</th>
                    <th>Num Of Person</th>
                    <th>Quantity</th>
                    <th>Slot</th>  
                  </tr>
                </thead>
                <tbody>
                  {reservationsDetail.map((p, index) => (
                    <tr>
                      <td>{index+1}</td>
                      <td>{formatDate(p.beginTime)}</td>
                      <td>{p.docterName}</td>
                      <td>{p.nurseName}</td>
                      <td>{p.numOfPerson}</td>
                      <td>{p.quantity}</td>
                      <td>{p.slot}</td> 
                      
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
