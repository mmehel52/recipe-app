import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.recipe);
  return (
    <div>
      <p>{data.recipe.label}</p>
      <img src={data.recipe.image} alt="" />
      <button onClick={() => navigate("/details", { state: data.recipe })}>
        details
      </button>
    </div>
  );
};

export default Card;
