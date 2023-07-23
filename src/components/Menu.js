import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { useEffect } from "react";
// import jwt from "jsonwebtoken";
export default function Menu() {
  const nav = useNavigate();

  useEffect(() => {
    // Kiểm tra token trong localStorage để xác định người dùng đã đăng nhập hay chưa
    const token = localStorage.getItem("token");
    if (token) {
    //   const decodeJWT = (token) => {
    //     try {
    //       // Giải mã JWT với khóa bí mật (secret) đã sử dụng để ký
    //       const decodedToken = jwt.verify(token, "TUNG_TV");

    //       // Trả về payload (thông tin người dùng) đã giải mã từ token
    //       return decodedToken;
    //     } catch (error) {
    //       // Nếu xảy ra lỗi trong quá trình giải mã (token không hợp lệ, hết hạn,...)
    //       // bạn có thể xử lý lỗi ở đây nếu cần thiết
    //       console.error("Lỗi giải mã JWT:", error);
    //       return null;
    //     }
    //   };
    //   const decodedPayload = decodeJWT(token);
    //   console.log(decodedPayload);

      //             const jwt = require('jsonwebtoken');
      //             const secretKey = 'TUNG_TV';
      //             const decodedData = jwt.verify(token, secretKey);
      //             // Kết quả decodedData sẽ chứa các thông tin có trong JWT
      //   console.log(decodedData);
      //    console.log(token)
    }
  }, [nav]);

  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#e3f2fd", color: "black", marginBottom: 20 }}
    >
      <div className="col-12 col-sm-2" class="container-fluid">
        <h3 style={{ marginTop: 10 }}>Children Care</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavDropdown"
          className="col-12 col-sm-7
    "
        >
          <ul class="navbar-nav">
            <li class="nav-item" style={{ marginTop: 5, marginRight: 5 }}>
              <Link class="nav-link" to={`/`}>
                {" "}
                <House />
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/service_list`}>
                Services
              </Link>
              {/* <a class="nav-link" href="/service_list">Services</a> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Feedbacks
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Admin
              </a>
            </li>
            <li class="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Manager
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link class="nav-link" to={`/manager_service`}>
                      {" "}
                      Manager ServiceList
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link class="nav-link" to={`/manager_account`}>
                      {" "}
                      Account Manager
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link class="nav-link" to={`/action-3`}>
                      {" "}
                      FeedbackList
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/login">
                SignIn
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/logout">
                SignUp
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-#fff ms-lg-2" to={`/profileUser/2`}>
                <div>
                  <img
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      borderColor: "#fff",
                      border: "2px solid #fff",
                    }}
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBONcJOzAAsu-WtDfk0Sr3QNGcTSnonIpRBQ&usqp=CAU`}
                    alt="User Avatar"
                  />
                </div>
                <p>Nguyen</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
