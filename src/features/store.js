import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { QuotesReducer } from "./quotations/reducer";

const root_reducer = combineReducers({
  quotes: QuotesReducer,
});

export const store = createStore(
  root_reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
