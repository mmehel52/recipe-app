import { useState } from "react";

import { useNavigate } from "react-router-dom";
import About from "../about/About.jsx";

import LoginStyled, {
  LoginDiv,
  LoginImg,
  Form,
  LoginInput,
  LoginButton,
} from "./LoginStyled.js";
const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
    password: "123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginStyled>
      <LoginDiv>
        <LoginImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2397px-Recipe-575434.svg.png"
          alt=""
        />
        <h1 style={{ color: "#D6D58E" }}>RECİPE APP</h1>
        <Form onSubmit={() => navigate("/home")}>
          <LoginInput type="text" placeholder="USERNAME" required />

          <LoginInput type="password" placeholder="PASSWORD" required />

          <LoginButton type="submit">LOGİN</LoginButton>
        </Form>
      </LoginDiv>

      {/* <PrivateRouter {...formValues} /> */}
    </LoginStyled>
  );
};

export default Login;
