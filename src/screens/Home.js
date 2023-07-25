import DefaultTemplate from "../templates/DefaultTemplates";
import "../styles/Default.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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

  const handleImageError = (e) => {
    e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBONcJOzAAsu-WtDfk0Sr3QNGcTSnonIpRBQ&usqp=CAU'; // Thay thế bằng đường dẫn của ảnh mặc định (abc.jpg)
  };

  useEffect(() => {
    let url = `http://localhost:8080/api/Service/Service/listservices/${searchstatus}/${searchTitle}/none/${searchcategory}/${searchorder}/${currentpage}/${pagesize}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.listServices);
        setService(result.listServices); // Lấy mảng listServices từ result
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  return (
    <DefaultTemplate clasName="container">
      <div className="container-fluid col-8">
        <h3
          className="row"
          style={{ textAlign: "center", backgroundColor: "#e3f2fd" }}
        >
          Special
        </h3>
        <div style={{ border: "none" }} className="row content d-flex justify-content-around" id="home">
          {service.map((s) => (
            <div style={{ width: 300 }} className="product bg-white me-3 mb-3 d-flex flex-column justify-contnt-cente align-items-center border-none">
              <Link to={`/service_detail/${s.service_id}`}>
                <img src={s.imagelink} width="100%"
                  onError={handleImageError}
                  height="150"></img>
                <h5 className="text-center" style={{ fontSize: 18, color: "blue" }}>{s.title}</h5>
                <p style={{ fontSize: 12 }}>{s.bi}</p>
              </Link>
              <Button variant="outline-success" href="#">
                Add
              </Button>{" "}
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </DefaultTemplate>
  );
}
