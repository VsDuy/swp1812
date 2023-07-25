import UserTemplate from "../templates/UserTemplate";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [doctor, setDoctor] = useState([]);
  const [nurse, setNurse] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    var tota = 0;
    for (const [index, item] of services.entries()) {
      tota += item.price
    }
    setTotal(tota);
  }, [services]);

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
      const storedServiceIds = JSON.parse(localStorage.getItem("Service"));
      if (storedServiceIds && storedServiceIds.length > 0) {
        setServices(storedServiceIds);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data for services: ", error);
    }
  };

  let handleDelete = (id) => {
    const indexToDelete = services.findIndex((item) => item.cartId === id);

    if (indexToDelete !== -1) {
      const updatedServices = [...services];

      // Xóa đối tượng khỏi danh sách
      updatedServices.splice(indexToDelete, 1);

      // Cập nhật danh sách mới
      setServices(updatedServices);
      localStorage.setItem("Service", JSON.stringify(updatedServices));
      toast.success("Delete successfully");
    }
  };

  // Kiểm tra xem có mục nào khác trong giỏ hàng có cùng serviceId và slot không
  const handleSlotSelection = (cartId, selectedSlot, doctorId, nurseId) => {
    handleChange(cartId, selectedSlot, doctorId, nurseId);
    // const cartItem = services.find((item) => item.cartId == cartId);
    // const existingItem = services.find(
    //   (item) =>
    //     item.cartId !== cartItem.cartId &&
    //     item.beginTime === cartItem.beginTime &&
    //     item.serviceId === cartItem.serviceId &&
    //     item.slot == selectedSlot
    // );
    // if (existingItem) {
    //   toast.error("Can't set repeat slot or doctor,nurse in slot  on same day");
    // } else {
    //   console.log(existingItem);
    //   let foundIndex = -1; // Biến lưu chỉ số của phần tử cần cập nhật

    //   // Cập nhật cartItem vào services
    //   for (const [index, item] of services.entries()) {
    //     if (item.cartId == cartId) {
    //       foundIndex = index; // Lưu chỉ số của phần tử cần cập nhật
    //       break; // Thoát khỏi vòng lặp khi tìm thấy phần tử
    //     }
    //   }

    //   if (foundIndex != NaN && foundIndex !== -1) {
    //     // Thực hiện cập nhật phần tử
    //     const updatedCart = [...services]; // Tạo một bản sao của mảng services để tránh cập nhật trực tiếp vào mảng gốc
    //     updatedCart[foundIndex].slot = selectedSlot;
    //     setServices(updatedCart); // Cập nhật state của services với giá trị mới
    //     localStorage.setItem("Service", JSON.stringify(updatedCart));
    //   }
    // }
  };

  const handleDoctorSelection = (cartId, doctorId, selectedSlot, nurseId) => {
    handleChange(cartId, selectedSlot, doctorId, nurseId);
  };
  const handleNuurseSelection = (cartId, nurseId, doctorId, selectedSlot) => {
    handleChange(cartId, selectedSlot, doctorId, nurseId);
  };

  const submitCart = async () => {
    console.log(services);
  };

  const handleChange = async (cartId, selectedSlot, doctorId, nurseId) => {
    const cartItem = services.find((item) => item.cartId == cartId);
    cartItem.slot = selectedSlot;
    cartItem.doctor = doctorId;
    cartItem.nurse = nurseId;
    try {
      const response = await axios.put(
        "http://localhost:8080/api/ccg1/reservation/checkCart",
        cartItem
      ); // Thay 'URL_API' bằng URL API thực tế
      console.log(response.data);
      if (response.data === 1) {
        toast.error("Looks like the doctor or nurse already has this schedule");
        return;
      } else {
      }
    } catch (error) {
      return;
    }
    const existingItem = services.find(
      (item) =>
        (item.cartId !== cartItem.cartId &&
          item.beginTime === cartItem.beginTime &&
          item.serviceId === cartItem.serviceId &&
          item.slot == selectedSlot &&
          (item.doctor === doctorId || item.nurse === nurseId)) ||
        (item.beginTime === cartItem.beginTime &&
          item.slot === selectedSlot &&
          (item.doctor === doctorId || item.nurse === nurseId))
    );
    if (existingItem) {
      toast.error("Can't set repeat slot or doctor,nurse in slot  on same day");
    } else {
      console.log(existingItem);
      let foundIndex = -1; // Biến lưu chỉ số của phần tử cần cập nhật

      // Cập nhật cartItem vào services
      for (const [index, item] of services.entries()) {
        if (item.cartId == cartId) {
          foundIndex = index; // Lưu chỉ số của phần tử cần cập nhật
          break; // Thoát khỏi vòng lặp khi tìm thấy phần tử
        }
      }
      if (foundIndex != NaN && foundIndex !== -1) {
        // Thực hiện cập nhật phần tử
        const updatedCart = [...services]; // Tạo một bản sao của mảng services để tránh cập nhật trực tiếp vào mảng gốc
        updatedCart[foundIndex] = cartItem;
        setServices(updatedCart); // Cập nhật state của services với giá trị mới
        localStorage.setItem("Service", JSON.stringify(updatedCart));
      }
    }
  };

  const handleQuantityChange = (cartId, newQuantity) => {
    if (Number.isInteger(newQuantity) && newQuantity > 0) {
      const updatedCart = services.map((x) => {
        if (x.cartId === cartId) {
          // Thay đổi thông tin ở đây nếu muốn cập nhật thông tin cụ thể
          return {
            ...x,
            quantity: newQuantity,
            price: newQuantity * x.priceService,
          };
        }
        return x;
      });
      setServices(updatedCart);
      localStorage.setItem("Service", JSON.stringify(updatedCart));
      // Tạo một bản sao của đối tượng quantityList để thay đổi số lượng cho mục cụ thể
      // const updatedQuantityList = { ...quantityList, [cartId]: newQuantity };
      // setQuantityList(updatedQuantityList);
      // console.log(quantityList);
    } else {
      toast.error("Cannot input");
    }
  };

  return (
    <UserTemplate>
      <Container>
        <div className="bg-white shadow p-3 rounded-2">
          <Row className="">
            <Col>
              <h3 className="text-primary">Danh sách Dịch vụ</h3>
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
                        <th>Total</th>
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
                              value={item.quantity || 1}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.cartId,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </td>
                          <td style={{ width: "30px" }}>
                            <Form.Control
                              type="number"
                              min={1}
                              step={1}
                              defaultValue={1}
                            />
                          </td>
                          <td style={{ width: "200px" }}>
                            <div className="input-group mb-3">
                              <select
                                className="custom-select"
                                onChange={(e) =>
                                  handleDoctorSelection(
                                    item.cartId,
                                    e.target.value,
                                    item.slot,
                                    item.nurse
                                  )
                                }
                                value={item.doctor}
                              >
                                {/* Hiển thị tên bác sĩ tương ứng với item.doctor */}
                                {doctor.map((doctor) => (
                                  <option
                                    key={doctor.userID}
                                    value={doctor.userID}
                                    selected={doctor.userID === item.doctor}
                                  >
                                    {doctor.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td style={{ width: "200px" }}>
                            <div className="input-group mb-3">
                              <select
                                className="custom-select"
                                onChange={(e) =>
                                  handleNuurseSelection(
                                    item.cartId,
                                    e.target.value,
                                    item.doctor,
                                    item.slot
                                  )
                                }
                                value={item.nurse}
                              >
                                {/* Hiển thị tên y tá tương ứng với item.nurse */}
                                {nurse.map((nurse) => (
                                  <option
                                    key={nurse.userID}
                                    value={nurse.userID}
                                    selected={nurse.userID === item.nurse}
                                  >
                                    {nurse.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td style={{ width: "80px" }}>
                            <div className="input-group mb-5">
                              <select
                                className="custom-select"
                                onChange={(e) =>
                                  handleSlotSelection(
                                    item.cartId,
                                    e.target.value,
                                    item.doctor,
                                    item.nurse
                                  )
                                }
                                value={item.slot}
                              >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <span className="text-success">
                              {item.priceService}$
                            </span>
                          </td>
                          <td>
                            <span className="text-success">{item.price}$</span>
                          </td>
                          <td>
                            <a
                              onClick={() => {
                                handleDelete(item.cartId);
                              }}
                              className="btn btn-outline-danger"
                            >
                              Remove
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <h4>Total</h4>
                  <button
                    onClick={() => {
                      submitCart();
                    }}
                    className="btn btn-primary float-right"
                  >
                    Thanh toán
                  </button>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </UserTemplate>
  );
};

export default Cart;
