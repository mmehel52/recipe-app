import React from "react";
import { useNavigate } from "react-router-dom";
import CardStyled, { CardButton, CardImg } from "./CardStyled.js";
const Card = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.recipe);
  return (
    <CardStyled>
      <h4>{data.recipe.label}</h4>
      <CardImg src={data.recipe.image} alt="" />
      <CardButton onClick={() => navigate("/details", { state: data.recipe })}>
        details
      </CardButton>
    </CardStyled>
  );
};

export default Card;
