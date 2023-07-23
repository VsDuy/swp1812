import UserTemplate from '../templates/UserTemplate'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import { Container, Row, Col, Table } from "react-bootstrap";


const Cart = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // Lấy danh sách serviceId từ Local Storage
        const storedServiceIds = JSON.parse(localStorage.getItem('ServiceId'));

        if (storedServiceIds && storedServiceIds.length > 0) {
            // Tạo mảng các Promise fetch API dựa trên danh sách serviceId
            const fetchPromises = storedServiceIds.map((id) => {
                const url = "http://localhost:8080/api/Service/Service/GetServiceById/" + id;
                return fetch(url).then((response) => response.json());
            });

            // Gửi tất cả các yêu cầu API cùng một lúc và chờ cho đến khi tất cả các yêu cầu hoàn thành
            Promise.all(fetchPromises)
                .then((dataList) => {
                    // Cập nhật mảng services với dữ liệu từ API
                    setServices(dataList);
                })
                .catch((error) => console.error(error));
        }
    }, []);
    console.log(services)
    return (
        <UserTemplate>
            <Table>
                <thead>
                    <tr>
                        <td>Service Id</td>
                        <td>Quantity</td>
                        <td>Num Of Person</td>
                        <td>Doctor</td>
                        <td>Nurse</td>
                        <td>Slot</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {services.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <input type='number' value={1} step={1} />
                            </td>
                            <td>
                                <input type='number' value={1} step={1} />
                            </td>
                            <td>
                                <select>
                                    <option>Mr a</option>
                                    <option>Mr V</option>
                                    <option>Mr D</option>
                                    <option>Mr R</option>
                                </select>
                            </td>
                            <td>
                                <select>
                                    <option>Ms a</option>
                                    <option>Ms b</option>
                                    <option>Ms c</option>
                                    <option>Ms d</option>
                                </select>
                            </td>
                            <td>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </td>
                            <td>
                                1000
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>

        </UserTemplate>
    );
};

export default Cart