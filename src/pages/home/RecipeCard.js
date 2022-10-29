import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/navbar/Nav";

const RecipeCard = () => {
  return (
    <div>
      <Nav />
      RecipeCard
      <Outlet />
    </div>
  );
};

export default RecipeCard;
