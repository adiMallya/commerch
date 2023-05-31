import axios from "axios";
import { ACTION_TYPE } from "../utils";

export const loginService = async (
  email,
  password,
  authDispatch,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (status === 200) {
      // const user = {
      //   user: foundUser,
      //   token: encodedToken,
      // };
      // localStorage.setItem("user", JSON.stringify(user));
      // return user;
      authDispatch({ type: ACTION_TYPE.SET_JWT_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPE.SET_USER, payload: foundUser });

      dataDispatch({ type: ACTION_TYPE.INIT_CART, payload: foundUser.cart });
      dataDispatch({
        type: ACTION_TYPE.INIT_WISHLIST,
        payload: foundUser.wishlist,
      });
      dataDispatch({
        type: ACTION_TYPE.SET_ADDRESS,
        payload: foundUser.address,
      });
    }
  } catch (error) {
    dataDispatch({ type: ACTION_TYPE.SHOW_ERROR, payload: "Error in login." });
    console.error(error);
  }
};

export const signUpService = async (
  email,
  password,
  firstName,
  lastName,
  authDispatch,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    if (status === 201) {
      // const user = { user: createdUser, token: encodedToken };
      // localStorage.setItem("user", JSON.stringify(user));
      // return user;
      authDispatch({ type: ACTION_TYPE.SET_JWT_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPE.SET_USER, payload: createdUser });

      dataDispatch({ type: ACTION_TYPE.INIT_CART, payload: createdUser.cart });
      dataDispatch({
        type: ACTION_TYPE.INIT_WISHLIST,
        payload: createdUser.wishlist,
      });
      dataDispatch({
        type: ACTION_TYPE.SET_ADDRESS,
        payload: createdUser.address,
      });
    }
  } catch (error) {
    dataDispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Email Already Exists.",
    });
    console.error(error);
  }
};
