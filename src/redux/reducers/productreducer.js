import { types } from "../constants/actionTypes";

const initial = {
  products: [],
};

export const productreducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
