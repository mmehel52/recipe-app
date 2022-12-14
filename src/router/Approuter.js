import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";
import { LoginContext } from "../context/LoginContext";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState("");
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </LoginContext.Provider>
  );
};
export default AppRouter;
