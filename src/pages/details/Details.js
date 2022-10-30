import React from "react";
import Nav from "../../components/navbar/Nav";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  return (
    <div>
      <Nav />
      <h4>{detail.label}</h4>
      <div>
        <ul>
          <p>Nutriens</p>
          <li>Calcium:{detail.digest[5].total.toFixed(2)}mg</li>
          <li>Carbs:{detail.digest[1].total.toFixed(2)}g</li>
          <li>Calcium:{detail.digest[5].total.toFixed(2)}mg</li>
          <li>Cholestrol:{detail.digest[3].total.toFixed(2)}mg</li>
          <li>Energy:{detail.calories.toFixed(2)}kcal</li>
          <li>Fat:{detail.digest[0].total.toFixed(2)}</li>
          <li>Protein:{detail.digest[2].total.toFixed(2)}</li>
        </ul>
        <img src={detail.image} alt="" />
        <ul>
          <p>Recipe</p>
          {detail.ingredientLines.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
