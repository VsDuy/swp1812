import React, { useEffect, useState } from "react";
import UserTemplate from "../templates/UserTemplate";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  let [user, setUser] = useState(null);
  useEffect(() => {
    // Kiểm tra token trong localStorage để xác định người dùng đã đăng nhập hay chưa
    const token = localStorage.getItem("token");
    if (token) {
      let url = `http://localhost:8080/api/ccg1/users/` + token;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setUser(result);
        })
        .catch((error) => {
          console.error("Loi menu " + error);
        });
    }
  }, []);

  return (
    <UserTemplate>
      {user ? (
        <div>
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px" }}
                      />
                      <h5 className="my-3">{user.name}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4 p-5">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user.name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone Number</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user.phone}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user.address}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <Link
                          class="nav-link btn btn-outline-success"
                          to={`/editProfileUser/`+ user.userID}
                        >
                          {" "}
                          Edit Profile
                        </Link>
                        <Link
                          class="nav-link btn btn-outline-primary"
                          to={`/changePassword`}
                        >
                          {" "}
                          Change Password
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </UserTemplate>
  );
};

export default Profile;
