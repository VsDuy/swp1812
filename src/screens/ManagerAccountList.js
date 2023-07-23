import { Container, Row, Col, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilSquare, XOctagonFill, XOctagon } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Dropdown } from "react-bootstrap";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import { toast } from "react-toastify";

export default function ManagerAccountList() {
  const [account, setAccount] = useState([]);
  let [idRole, setRoleid] = useState(-1);
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState(-1);
  let [submit, setsubmit] = useState("");
  const [roles, setRole] = useState([]);
  let [currentpage, setcurrentpage] = useState(1);
  const pagesize = 10;
  let [countAccount, setCountAccount] = useState(0);

  useEffect(() => {
    handleSearch();
  }, [currentpage]);
  useEffect(() => {
    handleSearch();
  }, [idRole]);
  useEffect(() => {
    handleSearch();
  }, [email]);
  useEffect(() => {
    handleSearch();
  }, [status]);

  const handleSearch = () => {
    var sEmail = "";
    if (email == "") {
      sEmail = "none";
    } else {
      sEmail = email;
    }
    let url = `http://localhost:8080/api/ccg1/Users/${sEmail}/${idRole}/${status}/${currentpage}/${pagesize}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.listServices);
        setAccount(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // lấy tất cả role
  useEffect(() => {
    let url = `http://localhost:8080/api/ccg1/roles`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setRole(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // lấy số lượng account để pha trang
  useEffect(() => {
    var sEmail = "";
    if (email == "") {
      sEmail = "none";
    } else {
      sEmail = email;
    }
    let url = `http://localhost:8080/api/ccg1/Users/count/${sEmail}/${idRole}/${status}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCountAccount(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const totalPage = Math.ceil(countAccount / pagesize);
  const numbers = Array.from(Array(totalPage).keys()); // Tạo mảng từ 0 đến 10

  const handleRoleSelect = (selectedRoleID) => {
    setRoleid(selectedRoleID);
  };

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/ccg1/users/listUser")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAccount(result);
  //     });
  // }, []);

  let handleActive = (id) => {
    fetch(`http://localhost:8080/api/ccg1/active/${id}`)
      .then((res) => {
        toast.success(status == 1 ? "Block" : "UnBlock" + " success");
        handleSearch();
      })
      .catch((error) => {
        toast.success(status == 1 ? "Block" : "UnBlock" + " error");
        console.error(error);
      });
  };

  const renderStatusIcon = (status) => {
    if (status === 1) {
      return <XOctagonFill />;
    } else if (status === 0) {
      return <XOctagon />;
    }
    // Trả về null nếu status không phải 1 hoặc 2
    return null;
  };

  const selectedRole = roles.find((role) => role.roleID == idRole);
  return (
    <UserTemplate>
      <Link to={`/addUser/`}>
      <Button variant="outline-success">
        Add new User
      </Button> 
      </Link>
      
      <Row>
        <Col xs={4}>
          <Form.Control type="text" placeholder="Search" disabled readOnly />
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter search email..."
              aria-label="Enter search email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputGroup>
          <Form.Control type="text" placeholder="FILTER" disabled readOnly />
          <Dropdown onSelect={handleRoleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {idRole != -1 ? selectedRole.roleName : "Role"}
              {/* {console.log(selectedRole.roleName)} */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item key="-1" eventKey="-1">
                All
              </Dropdown.Item>
              {roles.map((role) => (
                <Dropdown.Item key={role.roleID} eventKey={role.roleID}>
                  {role.roleName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control type="text" placeholder="Status" disabled readOnly />
          <br />
          <Button variant="outline-primary" onClick={() => setStatus(-1)}>
            All
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setStatus(1)}>
            Active
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setStatus(0)}>
            Block
          </Button>{" "}
        </Col>

        <Col>
          <Row>
            <Col xs={12}>
              <Table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th colSpan={4}>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {account.map((p) => (
                    <tr key={p.userID}>
                      <td>{p.userID}</td>
                      <td>{p.email}</td>
                      <td>{p.name}</td>
                      <td>{p.gender}</td>
                      <td>{p.phone}</td>
                      <td>{p.roleName}</td>
                      <td>{p.status == 1 ? "Active" : "Block"}</td>
                      <td>
                        <Link to={`/editUser/${p.userID}`}>
                          <PencilSquare />
                          </Link>
                      </td>
                      <td>
                        <a
                          onClick={() => {
                            handleActive(p.userID);
                          }}
                        >
                          {renderStatusIcon(p.status)}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Col xs={12} className="text-center">
                {totalPage === 1 ? (
                  <span></span>
                ) : (
                  numbers.map((number) => (
                    <React.Fragment key={number}>
                      <Button
                        className={number + 1 === currentpage ? "btn-dark" : ""}
                        onClick={() => setcurrentpage(number + 1)}
                      >
                        {number + 1}
                      </Button>{" "}
                      {/* Thêm khoảng trống giữa các nút */}
                    </React.Fragment>
                  ))
                )}
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </UserTemplate>
  );
}
