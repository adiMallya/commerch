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
    if (status === 201)
      dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: userAddresses });
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
    if (status === 200)
      dispatch({ type: ACTION_TYPE.SET_ADDRESS, payload: address });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ACTION_TYPE.SHOW_ERROR,
      payload: "Error is deleting address",
    });
  }
};
