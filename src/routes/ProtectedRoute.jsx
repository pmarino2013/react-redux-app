import { Route, Navigate } from "react-router-dom";
import NavMenu from "../components/NavMenu";

const ProtectedRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("user")) || null;

  return (
    <>
      <NavMenu />
      {isAuth ? children : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoute;
