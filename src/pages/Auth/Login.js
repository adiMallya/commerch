import { Link, useLocation } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../contexts";
import { useEffect, useState } from "react";
import { Password } from "./Password";
import "./Auth.css";
import { ACTION_TYPE } from "../../utils";

export function Login() {
  const location = useLocation();
  const { dispatch } = useDataContext();
  const { user, loginUser, navigate } = useAuthContext();

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
    dispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: true });
    event.preventDefault();
    loginUser(formData.email, formData.password);
  };

  const loginAsGuest = () => {
    setFormData((form) => ({
      email: "testmenow@commerch.in",
      password: "P@ssw0rd",
    }));
  };

  if (user) {
    navigate(location?.state?.from || "/products", { replace: true });
    dispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: false });
  }

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
