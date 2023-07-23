import UserTemplate from '../templates/UserTemplate';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

const Cart = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedServiceIds = JSON.parse(localStorage.getItem('Service'));
        setServices(storedServiceIds);
        setIsLoading(false);
    }, []);


    const handleSlotSelection = (cartId, serviceId, selectedSlot) => {
        console.log(cartId, serviceId, selectedSlot);
        console.log(services)
        // Hàm kiểm tra xem có các dịch vụ (services) có cùng serviceId và slot giống nhau hay không
        const hasDuplicateServiceSlot = (services, serviceId, selectedSlot) => {
            const count = services.filter(
                (item) => item.serviceId == serviceId && item.slot == selectedSlot
            ).length;
            return count > 1;
        };
        console.log(hasDuplicateServiceSlot(services, serviceId, selectedSlot))
        // if (hasDuplicateServiceSlot(services, serviceId, selectedSlot)) {
        //     // Nếu có các dịch vụ trùng nhau, hiển thị cảnh báo lên màn hình
        //     alert("Có các dịch vụ có cùng Service ID và Slot giống nhau!");
        // }
    };

    return (
        <UserTemplate>
            <Container>
                <div className='bg-white shadow p-5 rounded-2'>
                    <Row className="">
                        <Col>
                            <h3 className='text-primary'>Danh sách Dịch vụ</h3>
                            {isLoading ? (
                                <p>Đang tải...</p>
                            ) : (
                                <>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Service Name</th>
                                                <th>Quantity</th>
                                                <th>Number of Person</th>
                                                <th>Doctor</th>
                                                <th>Nurse</th>
                                                <th>Slot</th>
                                                <th>Price</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {services.map((item) => (
                                                <tr key={item.cartId}>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <Form.Control
                                                            type="number"
                                                            min={1}
                                                            step={1}
                                                            defaultValue={1}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            type="number"
                                                            min={1}
                                                            step={1}
                                                            defaultValue={1}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="input-group mb-3">
                                                            <select className="custom-select" id="doctor">
                                                                <option selected>{item.doctor}</option>
                                                                <option value="1">Mr. B</option>
                                                                <option value="2">Mr. C</option>
                                                                <option value="3">Mr. D</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group mb-3">
                                                            <select className="custom-select" id="nurse">
                                                                <option selected>{item.nurse}</option>
                                                                <option value="1">Miss. B</option>
                                                                <option value="2">Miss. C</option>
                                                                <option value="3">Miss. D</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group mb-3">
                                                            <select
                                                                className="custom-select"
                                                                id={`slot-${item.id}`}
                                                                onChange={(e) =>
                                                                    handleSlotSelection(
                                                                        item.cartId,
                                                                        item.serviceId,
                                                                        e.target.value
                                                                    )
                                                                }
                                                            >
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>

                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className='text-success'>$1000</span>
                                                    </td>
                                                    <td>
                                                        <a className='btn btn-outline-danger'>Remove</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </>
                            )}
                        </Col>
                    </Row>
                    <button className='btn btn-primary float-right'>Thanh toán</button>
                </div>
            </Container>
        </UserTemplate>
    );
};

export default Cart;
