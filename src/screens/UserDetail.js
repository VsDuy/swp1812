import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Full Name: {user.user_fullname}</p>
      <p>Gender: {user.user_gender}</p>
      <p>Address: {user.user_address}</p>
      <p>Email: {user.user_email}</p>
      <p>Phone: {user.user_phone}</p>
      
      
    </div>
    
  );
};

export default UserDetails;

