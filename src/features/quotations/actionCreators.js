import {
  QUOTES_ISERROR,
  QUOTES_ISLOADING,
  QUOTES_ISSUCCESS,
} from "./actionTypes";

export const quotesIsLoading = () => {
  return {
    type: QUOTES_ISLOADING,
  };
};

export const quotesIsSuccess = (data) => {
  return {
    type: QUOTES_ISSUCCESS,
    payload: data,
  };
};

export const quotesIsError = (e) => {
  return {
    type: QUOTES_ISERROR,
    payload: e,
  };
};

export const getQuotesData = () => (dispatch) => {
  try {
    dispatch(quotesIsLoading);

    fetch("http://localhost:3001/quotesData")
      .then((e) => e.json())
      .then((res) => {
        dispatch(quotesIsSuccess(res));
      });
  } catch (e) {
    dispatch(quotesIsError(e));
  }
};
