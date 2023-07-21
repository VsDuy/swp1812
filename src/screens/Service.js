import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UserTemplate from "../templates/UserTemplate";
import React, { useState, useEffect } from "react";

export default function Service() {
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
                    <img src={p.imagelink} onError={handleImageError}  alt="Service Image" />
                  </td>
                  <td>
                    
                    <Link to={`/service_detail/${p.service_id}`}>
                    <Button variant="outline-success">Chi tiết dịch vụ</Button></Link>
                    {" "}
                  </td>
                  <td>
                    <Button variant="outline-success" href="add_service">
                      Đặt dịch vụ
                    </Button>{" "}
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
          <Button className={number+1  === currentpage ? "btn-dark" : ""}
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
