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
      dataDispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "success", msg: `Hi, ${foundUser.firstName}!. Continue shopping.`}
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
      dataDispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "success", msg: `Welcome, ${createdUser.firstName}!. Start shopping now.`}
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
