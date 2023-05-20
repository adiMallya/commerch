import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useAuthContext();

  if (!user?.token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};
