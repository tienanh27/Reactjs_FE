import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { useNavigate } from "react-router-dom";
import viteLogo from "/vite.svg";
import Main from "./routes";
import "./App.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
