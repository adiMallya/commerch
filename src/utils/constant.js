export const ACTION_TYPE = {
  INIT_CATEGORIES: "INIT_CATEGORIES",
  INIT_PRODUCTS: "INIT_PRODUCTS",
  SORT_BY: "SORT_BY",
  TOGGLE_CATEGORY: "TOGGLE_CATEGORY",
  TOGGLE_STOCK: "TOGGLE_STOCK",
  TOGGLE_SALE: "TOGGLE_SALE",
  RATING_RANGE: "RATING_RANGE",
  SEARCH: "SEARCH",
  CLEAR_FILTER: "CLEAR_FILTER",

  SET_JWT_TOKEN: "SET_JWT_TOKEN",
  SET_USER: "SET_USER",
  LOG_OUT: "LOG_OUT",

  INIT_CART: "INIT_CART",
  ADD_TO_CART: "ADD_TO_AART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QTY_IN_CART: "UPDATE_QTY_IN_CART",
  CLEAR_CART: "CLEAR_CART",

  INIT_WISHLIST: "INIT_WISHLIST",
  MOVE_TO_WISHLIST: "MOVE_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",

  SET_ADDRESS: "SET_ADDRESS",
  ORDER_ADDRESS: "ORDER_ADDRESS",
  ORDER_PRICE: "ORDER_PRICE",
  CLEAR_PRICE: "CLEAR_PRICE",

  SHOW_TOAST: "SHOW_TOAST",
  SHOW_ERROR: "SHOW_ERROR",
  SHOW_LOADER: "SHOW_LOADER",
};

export const addrFormState = {
  name: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  phno: "",
};
