import React from "react";
import Nav from "../../components/navbar/Nav";
import { useLocation } from "react-router-dom";
import DetailStyled, {
  DetailDiv,
  DetailImg,
  DetailLi,
  DetailLi2,
  TopDiv,
  TopImg,
} from "./DetailStyled";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  return (
    <>
      <Nav />
      <DetailStyled>
        <TopDiv>
          <h1>{detail.label}</h1>
          <TopImg
            src="https://www.tarifinisevdim.com/uploads/others/eb7c8b8e-d929-4b66-8b0a-2548ea7d150d.Jpeg"
            alt=""
          />
        </TopDiv>
        <DetailDiv>
          <ul>
            <DetailLi>Nutriens</DetailLi>
            <DetailLi>Calcium:{detail.digest[5].total.toFixed(2)}mg</DetailLi>
            <DetailLi>Carbs:{detail.digest[1].total.toFixed(2)}g</DetailLi>
            <DetailLi>Calcium:{detail.digest[5].total.toFixed(2)}mg</DetailLi>
            <DetailLi>
              Cholestrol:{detail.digest[3].total.toFixed(2)}mg
            </DetailLi>
            <DetailLi>Energy:{detail.calories.toFixed(2)}kcal</DetailLi>
            <DetailLi>Fat:{detail.digest[0].total.toFixed(2)}</DetailLi>
            <DetailLi>Protein:{detail.digest[2].total.toFixed(2)}</DetailLi>
          </ul>
          <DetailImg src={detail.image} alt="" />
          <ol>
            {detail.ingredientLines.map((item, idx) => (
              <DetailLi2 key={idx}>{item}</DetailLi2>
            ))}
          </ol>
        </DetailDiv>
      </DetailStyled>
    </>
  );
};

export default Details;
