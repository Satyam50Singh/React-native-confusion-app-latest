const initialState = [];
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_USER_LIST_RESPONSE,
} from './constant';

import {USER_SIGN_UP_SUCCESS} from './actionTypes';

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

    case USER_SIGN_UP_SUCCESS:
      console.warn(action.responseBody);
      return action.responseBody;

    default:
      return state;
  }
};
