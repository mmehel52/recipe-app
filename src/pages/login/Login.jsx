import { useState } from "react";
import PrivateRouter from "../../router/PrivateRouter";
import { useNavigate } from "react-router-dom";
import AppRouter from "../../router/Approuter";

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
    <div className="container">
      <h1 className="text-center mt-4">LOGİN</h1>
      <form onSubmit={() => navigate("home")}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-danger mb-4">Submit</button>
        </div>
      </form>
      <PrivateRouter {...formValues} />
    </div>
  );
};

export default Login;
