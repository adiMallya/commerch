import axios from "axios";
import { ACTION_TYPE } from "../utils";

export const fetchUserWishlist = async (encodedToken, dispatch) => {
  try {
    const {
      status,
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.INIT_WISHLIST, payload: wishlist });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Couldn't fetch wishlist for the user",
    });
    console.error(error);
  }
};

export const addToWishlist = async (encodedToken, product, dispatch) => {
  try {
    const {
      status,
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: encodedToken } }
    );
    if (status === 201) {
      dispatch({ type: ACTION_TYPE.MOVE_TO_WISHLIST, payload: wishlist });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error in adding to wishlist",
    });
    console.error(error);
  }
};

export const removeFromWishlist = async (productId, encodedToken, dispatch) => {
  try {
    const {
      status,
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.REMOVE_FROM_WISHLIST, payload: wishlist });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error in removing from wishlist",
    });
    console.error(error);
  }
};
