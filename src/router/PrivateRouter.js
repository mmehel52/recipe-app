import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = (formValues) => {
  const { username, password, email } = formValues;
  // console.log(username);
  return (
    <div>
      {username && password && email ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};

export default PrivateRouter;
