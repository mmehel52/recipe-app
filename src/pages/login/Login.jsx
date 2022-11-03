import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LoginStyled, {
  LoginDiv,
  LoginImg,
  Form,
  LoginInput,
  LoginButton,
} from "./LoginStyled.js";
const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginStyled>
      <LoginDiv>
        <LoginImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2397px-Recipe-575434.svg.png"
          alt=""
        />
        <h1 style={{ color: "#D6D58E" }}>WELCOME TO </h1>

        <h3 style={{ color: "#D6D58E" }}> RECİPE APP</h3>

        <Form onSubmit={() => navigate("/home")}>
          <LoginButton type="submit">CLİCK</LoginButton>
        </Form>
      </LoginDiv>
    </LoginStyled>
  );
};

export default Login;
