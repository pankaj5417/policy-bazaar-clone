import {
  QUOTES_ISERROR,
  QUOTES_ISLOADING,
  QUOTES_ISSUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  quotes: [],
};

export const QuotesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case QUOTES_ISLOADING:
      return {
        isLoading: true,
        isError: false,
        quotes: [],
      };
    case QUOTES_ISSUCCESS:
      return {
        isLoading: false,
        isError: false,
        quotes: payload,
      };
    case QUOTES_ISERROR:
      return {
        isLoading: false,
        isError: true,
        quotes: [],
      };

    default:
      return state;
  }
};
