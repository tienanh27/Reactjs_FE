import React from "react";
import { Login, Register, Home } from "../pages";
import { Routes, Route } from "react-router-dom";
import Protected from "./protected";

const Main = () => {
  let token = localStorage.getItem("accessToken");
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Main;
