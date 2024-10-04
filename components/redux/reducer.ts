const initialState = [];
import {ADD_TO_CART} from './constant';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};
