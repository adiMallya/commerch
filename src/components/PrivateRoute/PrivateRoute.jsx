import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ path, ...rest }) => {
  const login = false;
  return login ? (
    <Route path={path} {...rest} />
  ) : (
    <Navigate to={"/login"} state={{ from: path }} />
  );
};
