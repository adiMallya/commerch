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
  toast: {
    type: "success",
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
