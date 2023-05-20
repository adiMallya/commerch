import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDataContext } from "./DataContext";
import { loginService, signUpService } from "../services";
import { ACTION_TYPE } from "../utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch } = useDataContext();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const loginUser = async (email, password) => {
    const user = await loginService(email, password);
    if (user?.token) {
      setUser(user);
      return;
    }
    dispatch({ type: ACTION_TYPE.SHOW_ERROR, payload: "Error in login." });
  };

  const signUpUser = async (email, password, firstName, lastName) => {
    const user = await signUpService(email, password, firstName, lastName);
    if (user?.token) {
      setUser(user);
      return;
    }
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Email Already Exists.",
    });
  };

  const logOutUser = () => {
    setUser(false);
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loginUser, signUpUser, logOutUser, navigate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
