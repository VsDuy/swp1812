import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pass, PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function ManagerServiceList() {
  const [service, setService] = useState([]);
  let [searchTitle, setSearchTitle] = useState("");
  let [searchcategory, setSearchcategory] = useState(-1);
  let [searchstatus, setSearchstatus] = useState(-1);
  let [searchorder, setSearchorder] = useState(-1);
  let [currentpage, setcurrentpage] = useState(1);
  const pagesize = 100;
  let totalsize;
  var maxpage = 1;

  //update part
  let [id, setid] = useState("");
  let [title, settitle] = useState("");
  let [bi, setbi] = useState("");
  let [createddate, setcreateddate] = useState("");
  let [categoryid, setcategoryid] = useState("");
  let [price, setprice] = useState("");
  let [discount, setdiscount] = useState("");
  let [detail, setdetail] = useState("");
  let [vote, setvote] = useState("");
  let [imagelink, setimagelink] = useState("");
  let [status, setstatus] = useState("");
  let [submit, setsubmit] = useState("");
  let currentselect;

  useEffect(() => {
    let url = `http://localhost:8080/api/Service/Service/listservices/${searchstatus}/${searchTitle}/none/${searchcategory}/${searchorder}/${currentpage}/${pagesize}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.listServices);
        setService(result.listServices); // Lấy mảng listServices từ result
        GetTotalPageSize();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const GetTotalPageSize = () => {
    fetch(`http://localhost:8080/api/Service/Service/listservice`)
      .then((res) => res.json())
      .then((result) => {
        totalsize = result.length;
        maxpage = totalsize / pagesize + 1;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [searchstatus]);
  useEffect(() => {
    handleSearch();
  }, [searchTitle]);
  useEffect(() => {
    handleSearch();
  }, [searchcategory]);
  useEffect(() => {
    handleSearch();
  }, [searchorder]);
  useEffect(() => {
    handleSearch();
  }, [currentpage]);

  useEffect(() => {
    let data = {
      id: `${id}`,
      title: `${title}`,
      bi: `${bi}`,
      createddate: `${createddate}`,
      categoryid: `${categoryid}`,
      price: `${price}`,
      discount: `${discount}`,
      detail: `${detail}`,
      vote: `${vote}`,
      imagelink: `${imagelink}`,
      status: `${status}`,
    };
    console.log(data);
    // Axios.post(
    //     "http://localhost:8080/api/Service/Service/listservices/updateservice",
    //     data
    // )
    //     .then((response) => {
    //         handleSearch();
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
  }, [submit]);

  const [category, setCategory] = useState([]);
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

  const handleSearch = () => {
    let url = `http://localhost:8080/api/Service/Service/listservices/${searchstatus}/${searchTitle}/none/${searchcategory}/${searchorder}/${currentpage}/${pagesize}`;
    if (searchTitle == "") {
      url = `http://localhost:8080/api/Service/Service/listservices/${searchstatus}/none/none/${searchcategory}/${searchorder}/${currentpage}/${pagesize}`;
    }
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setService(result.listServices);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let handleDelete = (id) => {
    fetch(
      `http://localhost:8080/api/Service/Service/listservices/deleteservice/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        alert("Delete ok");
        handleSearch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let handleUpdate = (
    id,
    title,
    bi,
    createddate,
    categoryid,
    price,
    discount,
    detail,
    vote,
    imagelink,
    status
  ) => {
    let data = {
      id: id,
      title: title,
      bi: bi,
      createddate: createddate,
      categoryid: categoryid,
      price: price,
      discount: discount,
      detail: detail,
      vote: vote,
      imagelink: imagelink,
      status: status,
    };
    console.log(data);
    Axios.post(
      "http://localhost:8080/api/Service/Service/listservices/updatervice",
      data
    )
      .then((response) => {
        handleSearch();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserTemplate>
      <Button variant="outline-success" href="add_service">
        Add new
      </Button>{" "}
      <br></br>
      <Row>
        <Col xs={12} style={{ textAlign: "center" }}>
          <h2>MANAGER SERVICE LIST</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Form.Control type="text" placeholder="Search" disabled readOnly />
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter search title..."
              aria-label="Enter search title..."
              value={searchTitle}
              defaultValue=""
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
            />
            <Button onClick={handleSearch}>Go!</Button>
          </InputGroup>
          <Form.Control
            type="text"
            placeholder="Caterory services manager"
            disabled
            readOnly
          />
          {category.map((s) => (
            <React.Fragment key={s.categoryId}>
              <Button
                variant="outline-primary "
                onClick={() => setSearchcategory(s.categoryId)}
              >
                {s.categoryName}
              </Button>
              <br />
            </React.Fragment>
          ))}
         
          <Button
            variant="outline-danger"
            onClick={() => setSearchcategory(-1)}
          >
            All
          </Button>{" "}
          <br></br>
          <Form.Control
            type="text"
            placeholder="Sorf services"
            disabled
            readOnly
          />
          <Button variant="outline-primary" onClick={() => setSearchorder(-1)}>
            Sort by Default
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSearchorder(0)}>
            Sort by title
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSearchorder(1)}>
            Sort by Price ASC
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSearchorder(2)}>
            Sort by Price DESC
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSearchorder(3)}>
            Sort by Categoryname ASC
          </Button>{" "}
          <Button variant="outline-primary" onClick={() => setSearchorder(4)}>
            Sort by Categoryname DESC
          </Button>{" "}
          <Form.Control
            type="text"
            placeholder="Status Avaible"
            disabled
            readOnly
          />
          <Button variant="outline-primary" onClick={() => setSearchstatus(1)}>
            Enable
          </Button>{" "}
          <br></br>
          <Button
            variant="outline-secondary"
            onClick={() => setSearchstatus(0)}
          >
            Not Enable
          </Button>{" "}
          <br></br>
          <Button
            variant="outline-secondary"
            onClick={() => setSearchstatus(-1)}
          >
            All
          </Button>{" "}
          <br></br>
        </Col>

        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <Table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Imagelink</th>
                    <th>Tittle</th>
                    <th>Bio</th>
                    <th>Sategoryid</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Sale Price</th>
                    <th>Createddate</th>
                    <th colSpan={4}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {service.map((s) => (
                    <tr key={s.service_id}>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"service_id_" + s.service_id}
                          readOnly
                          defaultValue={s.service_id}
                          type="text"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"imagelink_" + s.service_id}
                          defaultValue={s.imagelink}
                          type="text"
                          onChange={(e) => {
                            setimagelink(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"title_" + s.service_id}
                          defaultValue={s.title}
                          type="text"
                          onChange={(e) => {
                            settitle(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"bi_" + s.service_id}
                          as="textarea"
                          defaultValue={s.bi}
                          type="text"
                          onChange={(e) => {
                            setbi(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"categoryid_" + s.service_id}
                          defaultValue={s.categoryid}
                          type="text"
                          onChange={(e) => {
                            setcategoryid(e.target.value);
                          }}
                        />
                      </td>
                      <td>{s.categoryname}</td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"price_" + s.service_id}
                          defaultValue={s.price}
                          type="text"
                          onChange={(e) => {
                            setprice(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"discount_" + s.service_id}
                          defaultValue={s.discount}
                          type="text"
                          onChange={(e) => {
                            setdiscount(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"createddate_" + s.service_id}
                          defaultValue={s.createddate}
                          type="text"
                          onChange={(e) => {
                            setcreateddate(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          key={s.service_id}
                          id={"statusd_" + s.service_id}
                          defaultValue={s.status}
                          type="text"
                          onChange={(e) => {
                            setstatus(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <a
                          key={s.service_id}
                          onClick={() => {
                            handleUpdate(
                              document.getElementById(
                                "service_id_" + s.service_id
                              ).value,
                              document.getElementById("title_" + s.service_id)
                                .value,
                              document.getElementById("bi_" + s.service_id)
                                .value,
                              document.getElementById(
                                "createddate_" + s.service_id
                              ).value,
                              document.getElementById(
                                "categoryid_" + s.service_id
                              ).value,
                              document.getElementById("price_" + s.service_id)
                                .value,
                              document.getElementById(
                                "discount_" + s.service_id
                              ).value,
                              s.detail,
                              s.vote,
                              document.getElementById(
                                "imagelink_" + s.service_id
                              ).value,
                              document.getElementById("statusd_" + s.service_id)
                                .value
                            );
                          }}
                        >
                          <PencilSquare />
                        </a>
                      </td>

                      <td>
                        <a
                          onClick={() => {
                            handleDelete(s.service_id);
                          }}
                        >
                          <Trash3Fill />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              Page:{totalsize}
              <input
                type="number"
                min={1}
                value={currentpage}
                onChange={(e) => {
                  setcurrentpage(e.target.value);
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </UserTemplate>
  );
}
