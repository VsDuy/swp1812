import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateAccount() {
  const [accountInfo, setAccountInfo] = useState(null);
  const [editedAccountInfo, setEditedAccountInfo] = useState(null);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('URL_API'); // Thay 'URL_API' bằng URL API thực tế
      setAccountInfo(response.data);
      setEditedAccountInfo(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAccountInfo({ ...editedAccountInfo, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put('URL_API', editedAccountInfo); // Thay 'URL_API' bằng URL API thực tế để cập nhật thông tin tài khoản
      setAccountInfo(editedAccountInfo);
      console.log('Thông tin tài khoản đã được cập nhật.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      {editedAccountInfo ? (
        <div>
          <h1>Thông tin tài khoản</h1>
          <p>ID: {editedAccountInfo.userID}</p>
          <p>
            Tên:
            <input
              type="text"
              name="name"
              value={editedAccountInfo.name}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Giới tính:
            <select
              name="gender"
              value={editedAccountInfo.gender}
              onChange={handleInputChange}
            >
              <option value={1}>Nam</option>
              <option value={2}>Nữ</option>
            </select>
          </p>
          {/* Các trường nhập liệu khác (address, email, phone, roleName, status) */}
          <button onClick={handleSave}>Lưu</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UpdateAccount;
