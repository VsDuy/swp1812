import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserTemplate from "../templates/UserTemplate";
import { toast } from "react-toastify";

export default function ProfileUser() {
  const param = useParams();

  const [editedAccountInfo, setEditedAccountInfo] = useState(null);
  const [roles, setRole] = useState([]);
  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/ccg1/users/" + param.id
      ); // Thay 'URL_API' bằng URL API thực tế
      setEditedAccountInfo(response.data);
    } catch (error) {
      console.error("Error fetching data user: ", error);
    }
    try {
      const responseRole = await axios.get(
        "http://localhost:8080/api/ccg1/roles"
      ); // Thay 'URL_API' bằng URL API thực tế
      setRole(responseRole.data);
    } catch (error) {

      console.error("Error fetching data role: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAccountInfo({
      ...editedAccountInfo,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      console.log(editedAccountInfo);
      await axios.put(
        "http://localhost:8080/api/ccg1/users/update",
        editedAccountInfo
      );
      // console.log("Thông tin tài khoản đã được cập nhật.");
      toast.success("Update success");
    } catch (error) {
      toast.error("Update faill");
      console.error("Error saving data:", error);
    }
  };

  return (
    <UserTemplate>
      <div>
        {editedAccountInfo ? (
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="p-4">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <h4>Profile</h4>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={editedAccountInfo.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={editedAccountInfo.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={editedAccountInfo.phone}
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter address"
                      value={editedAccountInfo.address}
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    {/* <label>Gender</label>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        value="1"
                        name="gender"
                        checked={editedAccountInfo.gender === 1}
                        onChange={handleInputChange}
                      />
                      <label className="ml-2">Male</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="0"
                        onChange={handleInputChange}
                        checked={editedAccountInfo.gender === 0}
                      />
                      <label className="ml-2">Female</label>
                    </div> */}
                  </div>
                  {/* <div className="form-group">
                    <label>Role</label>
                    <select
                      className="form-control"
                      name="roleID"
                      value={editedAccountInfo.roleID}
                      onChange={handleInputChange}
                    >
                      {roles.map((role) => (
                        <option key={role.roleID} value={role.roleID}>
                          {role.roleName}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={handleSave}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </UserTemplate>
  );
}
