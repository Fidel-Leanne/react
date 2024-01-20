import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login";  // Assuming the correct import path
import Home from "./container/home";  // Assuming the correct import path

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
