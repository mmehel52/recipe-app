import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext.jsx";

import RegisterStyled, {
  LoginDiv,
  LoginImg,
  Form,
  LoginInput,
  LoginButton,
} from "./RegisterStyled.js";
const Register = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <RegisterStyled>
      <LoginDiv>
        <LoginImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2397px-Recipe-575434.svg.png"
          alt=""
        />
        <h1 style={{ color: "#D6D58E" }}>RECİPE APP</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <LoginInput
            type="text"
            placeholder="USERNAME"
            value={user?.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <LoginInput
            type="password"
            placeholder="PASSWORD"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <LoginButton type="submit">REGİSTER</LoginButton>
        </Form>
      </LoginDiv>
    </RegisterStyled>
  );
};

export default Register;
