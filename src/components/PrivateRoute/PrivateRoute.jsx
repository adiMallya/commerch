import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};
