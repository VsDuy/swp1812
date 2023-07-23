import UserTemplate from '../templates/UserTemplate';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import axios from "axios";

const Cart = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [doctor, setDoctor] = useState([]);
    const [nurse, setNurse] = useState([]);
    const [quantityList, setQuantityList] = useState({}); // Sử dụng đối tượng để lưu trữ số lượng cho từng mục trong giỏ hàng
    const [selectedSlots, setSelectedSlots] = useState({});

    useEffect(() => {
        fetchDataFromAPI();
    }, []);
    const fetchDataFromAPI = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/ccg1/users/role/2"
            ); // Thay 'URL_API' bằng URL API thực tế
            setDoctor(response.data);
        } catch (error) {
            console.error("Error fetching data role: ", error);
        }

        try {
            const response = await axios.get(
                "http://localhost:8080/api/ccg1/users/role/3"
            ); // Thay 'URL_API' bằng URL API thực tế
            setNurse(response.data);
        } catch (error) {
            console.error("Error fetching data role: ", error);
        }

        try {
            const storedServiceIds = JSON.parse(localStorage.getItem('Service'));
            if (storedServiceIds && storedServiceIds.length > 0) {
                setServices(storedServiceIds);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data for services: ", error);
        }
    }

    const handleSlotSelection = (cartId, serviceId, selectedSlot) => {
        // Kiểm tra xem có mục nào khác trong giỏ hàng có cùng serviceId và slot không
        const isDuplicate = services.some(
            (item) =>
                item.cartId !== cartId &&
                item.serviceId === serviceId &&
                selectedSlots[item.cartId] === selectedSlot
        );

        // Nếu có mục trùng, in ra cảnh báo ngay lập tức
        if (isDuplicate) {
            alert("Cảnh báo: Slot đã được chọn bởi mục khác trong giỏ hàng.");
            return; // Dừng xử lý tiếp theo khi có cảnh báo
        }

        // Lưu giá trị slot được chọn vào state selectedSlots
        setSelectedSlots((prevSelectedSlots) => ({
            ...prevSelectedSlots,
            [cartId]: selectedSlot,
        }));

    };

    const checkDuplicateSlot = (cart, selectedCartId, selectedSlot) => {
        const duplicateItem = cart.find(
            (item) =>
                item.cartId !== selectedCartId && // Tránh so sánh với chính mục đang xét
                item.serviceId === selectedCartId.serviceId &&
                item.selectedSlot === selectedSlot
        );
        return duplicateItem !== undefined;
    };

    const handleQuantityChange = (cartId, newQuantity) => {
        // Tạo một bản sao của đối tượng quantityList để thay đổi số lượng cho mục cụ thể
        const updatedQuantityList = { ...quantityList, [cartId]: newQuantity };
        setQuantityList(updatedQuantityList);
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
                            ) : services.length === 0 ? (
                                <p>Giỏ hàng của bạn trống.</p>
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
                                                            id={`quantity${item.cartId}`}
                                                            type="number"
                                                            min={1}
                                                            step={1}
                                                            value={quantityList[item.cartId] || 1}
                                                            onChange={(e) => handleQuantityChange(item.cartId, parseInt(e.target.value))}
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
                                                                {/* Hiển thị tên bác sĩ tương ứng với item.doctor */}
                                                                {doctor.map((doctor) => (
                                                                    <option key={doctor.userID} value={doctor.userID} selected={doctor.userID === item.doctor}>
                                                                        {doctor.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group mb-3">
                                                            <select className="custom-select" id="nurse">
                                                                {/* Hiển thị tên y tá tương ứng với item.nurse */}
                                                                {nurse.map((nurse) => (
                                                                    <option key={nurse.userID} value={nurse.userID} selected={nurse.userID === item.nurse}>
                                                                        {nurse.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group mb-3">
                                                            <select
                                                                className="custom-select"
                                                                id={`slot-${item.cartId}`}
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
                                                        <span className='text-success'>${item.price * (quantityList[item.cartId] || 1)}</span>
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
