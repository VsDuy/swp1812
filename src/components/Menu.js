import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Menu() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="col-12 col-sm-2" class="container-fluid" >

               <h3>Children Care</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown" className="col-12 col-sm-7
    ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
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
                        <li class="nav-item">
                        <Nav.Link as={Link} to="/user_manager">User Manager</Nav.Link>
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