import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
// import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route element={<PrivateRouter />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} />
      {/* </Route> */}
    </Routes>
  );
};
export default AppRouter;
