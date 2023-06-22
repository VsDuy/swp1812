import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetail';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Gọi API của Spring Boot để lấy danh sách người dùng
    // và cập nhật giá trị cho users
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id} onClick={() => handleUserSelect(user)}>
            {user.user_fullname}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
};

export default UserList;