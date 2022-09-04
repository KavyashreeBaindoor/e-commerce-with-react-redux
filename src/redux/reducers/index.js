import { combineReducers } from "redux";
import { productreducer } from "./productreducer";

export const rootreducer = combineReducers({
  productsall: productreducer,
});
