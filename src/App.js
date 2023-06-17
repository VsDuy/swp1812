import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Home from "./screens/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
