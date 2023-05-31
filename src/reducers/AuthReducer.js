import { ACTION_TYPE } from "../utils";

export const initialAuthState = {
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
};

export function authReducer(state, { type, payload }) {
  switch (type) {
    case ACTION_TYPE.SET_JWT_TOKEN:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
      };
    case ACTION_TYPE.SET_USER:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
      };
    case ACTION_TYPE.LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
