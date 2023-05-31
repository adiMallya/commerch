import { ACTION_TYPE } from "../utils";

export const initialOrderState = {
  orderAddress: {},
  orderPrice: {
    cartPrice: 0,
    discount: 0,
    convenienceFee: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
};

export function orderReducer(state, { type, payload }) {
  switch (type) {
    case ACTION_TYPE.ORDER_ADDRESS:
      return {
        ...state,
        orderAddress: { ...payload },
      };
    case ACTION_TYPE.ORDER_PRICE:
      return {
        ...state,
        orderPrice: { ...payload },
      };
    case ACTION_TYPE.CLEAR_PRICE:
      return {
        ...state,
        orderPrice: { ...initialState },
      };
    default:
      return state;
  }
}
