import { JSON_API } from "../../constants";
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

export const getQuotesData = (range) => (dispatch) => {
  try {
    dispatch(quotesIsLoading());

    let sortType = range.claimsSettled ? "asc" : "desc";
    fetch(
      `${JSON_API}/quotesData?lifeCover_lte=${range.lifeCover}&coverage_lte=${range.coverage}&_sort=claimsSettled&_order=${sortType}`
    )
      .then((e) => e.json())
      .then((res) => {
        dispatch(quotesIsSuccess(res));
      });
  } catch (e) {
    dispatch(quotesIsError(e));
  }
};
