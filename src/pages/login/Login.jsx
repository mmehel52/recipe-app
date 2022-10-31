import { useState } from "react";

import { useNavigate } from "react-router-dom";
// import PrivateRouter from "../../router/PrivateRouter";
import LoginStyled, {
  LoginDiv,
  LoginImg,
  Form,
  LoginInput,
  LoginButton,
} from "./LoginStyled.js";
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    alert(`Username: ${username}
    Email: ${email}
    password:${password}`);
  };
  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <LoginStyled>
      <LoginDiv>
        <LoginImg
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
          alt=""
        />
        <h1 style={{ color: "#D6D58E" }}>RECİPE</h1>
        <Form onSubmit={() => navigate("home")}>
          <LoginInput
            name="username"
            type="text"
            id="username"
            placeholder="USERNAME"
            value={formValues.username}
            onChange={handleFormValues}
          />

          <LoginInput
            name="password"
            type="password"
            id="password"
            placeholder="PASSWORD"
            value={formValues.password}
            onChange={handleFormValues}
          />

          <LoginButton>LOGİN</LoginButton>
        </Form>
      </LoginDiv>
      {/* <PrivateRouter {...formValues} /> */}
    </LoginStyled>
  );
};

export default Login;
