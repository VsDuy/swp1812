import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { House } from 'react-bootstrap-icons'
export default function Menu() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#e3f2fd", color: 'black', marginBottom: 20 }}>
            <div className="col-12 col-sm-2" class="container-fluid" >

                <h3 style={{marginTop: 10}} >Children Care</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown" className="col-12 col-sm-7
    ">
                    <ul class="navbar-nav">
                        <li class="nav-item" style={{marginTop:5 , marginRight:5}} >
                            <a href="/">
                                <House />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="service_list">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Feedbacks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Admin</a>
                        </li>
                        <li class="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Manager
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="manager_service">Manager ServiceList</Dropdown.Item>
                                    <Dropdown.Item href="manager_account">Account Manager</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">FeedbackList</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                    </ul>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown" className="col-12 col-sm-3">
                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <Nav.Link as={Link} to="/login">SignIn</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link as={Link} to="/logout">SignUp</Nav.Link>
                        </li>
                    </ul>


                </div>
            </div>
        </nav >
    );
}