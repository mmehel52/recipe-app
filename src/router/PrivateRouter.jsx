import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);
  return user.name ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRouter;
