const initialState = [];
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_USER_LIST_RESPONSE,
} from './constant';

export const reducer = (state = initialState, action) => {
  console.log('Action received:', action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const filteredState = state.filter(
        element => element.id !== action.payload.id,
      );
      return filteredState;

    case SAVE_USER_LIST_RESPONSE:
      return action.result;

    default:
      return state;
  }
};
