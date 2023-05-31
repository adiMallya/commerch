import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../contexts";
import { loginService } from "../../services";
import { ACTION_TYPE } from "../../utils";

import { Password } from "./Password";
import "./Auth.css";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch: dataDispatch } = useDataContext();
  const { token, dispatch: authDispatch } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) =>
    setFormData((form) => ({
      ...form,
      [event.target.type]: event.target.value,
    }));

  const submitToLogin = (event) => {
    const { email, password } = formData;
    dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: true });
    event.preventDefault();
    loginService(email, password, authDispatch, dataDispatch);
  };

  const loginAsGuest = () => {
    setFormData((form) => ({
      email: "testmenow@commerch.in",
      password: "P@ssw0rd",
    }));
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from || "/products", { replace: true });
      dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: false });
    }
  }, [token]);

  useEffect(() => {
    document.title = "commerch | login";
  }, []);

  return (
    <main className="page background--gradient">
      <div className="auth__container">
        <div className="auth-title">
          <span role="heading">Login</span>
        </div>
        <form className="auth-main" onSubmit={submitToLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputHandler}
            value={formData.email}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <Password onChangeHandler={inputHandler} value={formData.password} />
          <button className="btn btn--primary-solid" type="submit">
            Login
          </button>

          <button
            className="btn btn--primary-outline"
            onClick={loginAsGuest}
            type="submit"
          >
            Login as Guest
          </button>
        </form>
        <Link className="link-text link-text--primary" to={"/signup"}>
          New here ? Sign-up.
        </Link>
      </div>
    </main>
  );
}
