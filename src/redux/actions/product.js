//ACTION CREATORS
import { types } from "../constants/actionTypes";
import axios from "axios";

export const fetchprod = () => {
  return async function (dispatch) {
    const data = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: data.data,
    });
  };
};
