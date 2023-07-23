import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Manager from "./screens/ManagerServiceList";
import "bootstrap/dist/css/bootstrap.min.css";
import ManagerServiceList from "./screens/ManagerServiceList";
import ManagerAccountList from "./screens/ManagerAccountList";
import UserList from "./screens/ListUser";
import { CartProvider } from './contexts/CartContext';
import AddService from "./screens/NewSerive";
import EditList from "./screens/EditList";
import Service from "./screens/Service";
import Cart from "./screens/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceDetail from "./screens/ServiceDetail";
import EditAccount from "./screens/EditAccount";
import AddAccount from "./screens/AddUser";
import ProfileUser from "./screens/ProfileUser";

export const ApplicationContext = React.createContext([]);

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/manager_service" element={<ManagerServiceList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Register />} />
            <Route path="/manager_account" element={<ManagerAccountList />} />
            <Route path="/list_user" element={<UserList />} />
            <Route path="/add_service" element={<AddService />} />
            <Route path="/edit" element={<EditList />} />
            <Route path="/service_list" element={<Service />} />
            <Route path="/service_detail/:id" element={<ServiceDetail />} />
            <Route path="/editUser/:id" element={<EditAccount />} />ProfileUser
            <Route path="/profileUser/:id" element={<ProfileUser />} />
            <Route path="/addUser/" element={<AddAccount />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
