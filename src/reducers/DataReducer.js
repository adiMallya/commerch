import { ACTION_TYPE } from "../utils";

export const initialState = {
  categories: [],
  products: [],
  filters: {
    searchValue: "",
    sortBy: null,
    inStock: false,
    ratingRange: 3.5,
    categoryType: [],
  },
  cart: [],
  wishlist: [],
  toast: {
    type: "info",
    msg: "",
  },
  isLoading: true,
  error: null,
};

export function dataReducer(state, { type, payload }) {
  switch (type) {
    case ACTION_TYPE.INIT_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
        isLoading: false,
      };
    case ACTION_TYPE.INIT_PRODUCTS:
      return {
        ...state,
        products: [...payload],
        isLoading: false,
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          searchValue: payload.toLowerCase(),
        },
      };
    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: payload,
        },
      };
    case ACTION_TYPE.RATING_RANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          ratingRange: payload,
        },
      };
    case ACTION_TYPE.TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          inStock: !state.filters.inStock,
        },
      };
    case ACTION_TYPE.TOGGLE_CATEGORY:
      const isChecked = payload.checked;
      const categoryValue = payload.value;
      return {
        ...state,
        filters: {
          ...state.filters,
          categoryType: isChecked
            ? [...state.filters.categoryType, categoryValue]
            : state.filters.categoryType.filter((cat) => cat !== categoryValue),
        },
      };
    case ACTION_TYPE.CLEAR_FILTER:
      return {
        ...state,
        products: [...payload],
        filters: {
          searchValue: "",
          sortBy: null,
          inStock: false,
          ratingRange: 3.5,
          categoryType: [],
        },
      };
    case ACTION_TYPE.INIT_CART:
      return {
        ...state,
        cart: [...payload],
        isLoading: false,
      };
    case ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [...payload],
        toast: {
          type: "success",
          msg: "Added to your Cart",
        },
      };
    case ACTION_TYPE.UPDATE_QTY_IN_CART:
      return {
        ...state,
        cart: [...payload],
      };
    case ACTION_TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...payload],
        toast: {
          type: "info",
          msg: "Removed from Cart",
        },
      };
    case ACTION_TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
        toast: {
          type: "info",
          msg: "Cleared your Cart",
        },
      };
    case ACTION_TYPE.INIT_WISHLIST:
      return {
        ...state,
        wishlist: [...payload],
        isLoading: false,
      };
    case ACTION_TYPE.MOVE_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...payload],
        toast: {
          type: "success",
          msg: "Moved to your Wishlist",
        },
      };
    case ACTION_TYPE.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [...payload],
        toast: {
          type: "info",
          msg: "Moved out of Wishlist",
        },
      };
    case ACTION_TYPE.SHOW_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          msg: payload,
        },
      };
    case ACTION_TYPE.SHOW_ERROR:
      return {
        ...state,
        toast: {
          type: "error",
          msg: payload,
        },
        isLoading: false,
        error: payload,
      };
    case ACTION_TYPE.SHOW_LOADER:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}
