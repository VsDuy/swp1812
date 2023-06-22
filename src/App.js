import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Home from "./screens/Home";
import Register  from "./screens/Register";
import Login from "./screens/Login";
import UserManager from "./screens/UserManager";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/user_manager" element={<UserManager/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
