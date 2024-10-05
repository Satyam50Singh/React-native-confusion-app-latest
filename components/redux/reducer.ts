const initialState = [];
import {ADD_TO_CART, REMOVE_FROM_CART} from './constant';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const filteredState = state.filter(
        element => element.id !== action.payload.id,
      );
      return filteredState;

    default:
      return state;
  }
};
