import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("user")) || null;

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
