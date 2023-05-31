import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../contexts";
import { ACTION_TYPE } from "../../utils";
import { signUpService } from "../../services";

import { Password } from "./Password";
import "./Auth.css";

export function SignUp() {
  const navigate = useNavigate();
  const { dispatch: dataDispatch } = useDataContext();
  const { token, dispatch: authDispatch } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const inputHandler = (event) =>
    setFormData((form) => ({
      ...form,
      [event.target.getAttribute("name")]: event.target.value,
    }));

  const submitToRegister = (event) => {
    const { email, password, firstName, lastName } = formData;
    dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: true });
    event.preventDefault();
    signUpService(
      email,
      password,
      firstName,
      lastName,
      authDispatch,
      dataDispatch
    );
  };

  useEffect(() => {
    if (token) {
      navigate("/products", { replace: true });
      dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: false });
    }
  }, [token]);

  useEffect(() => {
    document.title = "commerch | sign-up";
  }, []);

  return (
    <main className="page background--gradient">
      <div className="auth__container">
        <div className="auth-title">
          <span role="heading">Sign Up</span>
        </div>
        <form className="auth-main" onSubmit={submitToRegister}>
          <div className="wrap-fields">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={inputHandler}
                value={formData.firstName}
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={inputHandler}
                value={formData.lastName}
                placeholder="Surname"
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            value={formData.email}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <Password onChangeHandler={inputHandler} value={formData.password} />
          <button className="btn btn--primary-solid" type="submit">
            Register
          </button>
        </form>
        <Link className="link-text link-text--primary" to={"/login"}>
          Already have an account ? Login.
        </Link>
      </div>
    </main>
  );
}
