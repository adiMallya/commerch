import axios from "axios";
import { ACTION_TYPE } from "../utils";

export const addNewAddress = async (encodedToken, address, dispatch) => {
  try {
    const {
      status,
      data: { address: userAddresses },
    } = await axios.post(
      "/api/user/address",
      { address },
      { headers: { authorization: encodedToken } }
    );
    if (status === 201) {
      dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: userAddresses });
      dispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "success", msg: "Saved your Address" },
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error is adding new address",
    });
  }
};

export const removeAddress = async (addressId, encodedToken, dispatch) => {
  try {
    const {
      status,
      data: { address },
    } = await axios.delete(`/api/user/address/${addressId}`, {
      headers: { authorization: encodedToken },
    });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: address });
      dispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "info", msg: "Removed selected Address" },
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error is deleting address",
    });
  }
};

export const updateAddress = async (encodedToken, address, dispatch) => {
  try {
    const {
      status,
      data: { address: userAddresses },
    } = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      {
        headers: { authorization: encodedToken },
      });
    if (status === 200) {
      dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: userAddresses });
      dispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "success", msg: "Updated your Address" },
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error is updating address",
    });
  }
};
