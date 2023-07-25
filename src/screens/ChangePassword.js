import React from 'react'
import UserTemplate from "../templates/UserTemplate";
import { Form } from "react-bootstrap";

const ChangePassword = () => {
    return (
        <UserTemplate>
            <div className='container bg-white shadow p-5 w-25'>
                <h3 className='text-center'>Chang Password</h3>
                <div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className='mb-3'>
                        <label>New Password</label>
                        <Form.Control
                            type="password"
                            placeholder="Enter new password"
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Confirm New Password</label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm new password"
                        />
                    </div>
                    <button className='btn btn-outline-primary '>Save Change</button>
                </div>
            </div>
        </UserTemplate>
    )
}

export default ChangePassword