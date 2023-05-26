import axios from "axios";
import { ACTION_TYPE } from "../utils";

export const fetchUserCart = async (encodedToken, dispatch) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.INIT_CART, payload: cart });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Couldn't fetch cart for the user",
    });
    console.error(error);
  }
};

export const addToCart = async (encodedToken, product, dispatch) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: encodedToken } }
    );
    if (status === 201) {
      dispatch({ type: ACTION_TYPE.ADD_TO_CART, payload: cart });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error in adding to cart",
    });
    console.error(error);
  }
};

export const removeFromCart = async (productId, encodedToken, dispatch) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.REMOVE_FROM_CART, payload: cart });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error in removing from cart",
    });
    console.error(error);
  }
};

export const updateQtyInCart = async (
  productId,
  encodedToken,
  actionType,
  dispatch
) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionType,
        },
      },
      { headers: { authorization: encodedToken } }
    );
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.UPDATE_QTY_IN_CART, payload: cart });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error in updating quantity in cart",
    });
    console.error(error);
  }
};
