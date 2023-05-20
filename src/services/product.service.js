import axios from "axios";
import { ACTION_TYPE } from "../utils";

export const fetchAllProducts = async (dispatch) => {
  try {
    const {
      status,
      data: { products },
    } = await axios.get("/api/products");
    if (status === 200) {
      dispatch({
        type: ACTION_TYPE.INIT_PRODUCTS,
        payload: products,
      });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Couldn't fetch products",
    });
    console.log(error);
  }
};

export const fetchAllCategories = async (dispatch) => {
  try {
    const {
      status,
      data: { categories },
    } = await axios.get("/api/categories");
    if (status === 200) {
      dispatch({
        type: ACTION_TYPE.INIT_CATEGORIES,
        payload: categories,
      });
    }
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Couldn't fetch categories",
    });
    console.log(error);
  }
};
