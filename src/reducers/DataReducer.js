import { ACTION_TYPE } from "../utils";

export const initialState = {
  products: [],
  filters: {
    searchValue: "",
    sortBy: null,
    inStock: false,
    ratingRange: 3.5,
    categories: [],
  },
  toast: {
    type: "info",
    msg: "",
  },
  isLoading: true,
  error: null,
};

export function dataReducer(state, { type, payload }) {
  switch (type) {
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
          searchedValue: payload.toLowerCase(),
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
          categories: isChecked
            ? [...state.filters.categories, categoryValue]
            : state.filters.categories.filter((cat) => cat !== categoryValue),
        },
      };
    case ACTION_TYPE.CLEAR_ALL:
      return {
        ...state,
        filters: {
          searchValue: "",
          sortBy: null,
          inStock: false,
          priceRange: 500,
          categories: [],
        },
      };
    case ACTION_TYPE.SHOW_TOAST:
      return {
        ...state,
        toastMsg: payload,
      };
    case ACTION_TYPE.SHOW_ERROR:
      return {
        ...state,
        toast: {
          ...state.toast,
          type: "error",
          msg: payload,
        },
        isLoading: false,
      };
    default:
      return state;
  }
}
