import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import RecipeCard from "../pages/home/RecipeCard";
// import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route element={<PrivateRouter />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe" element={<RecipeCard />} />
      {/* </Route> */}
    </Routes>
  );
};
export default AppRouter;
