import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_USER_LIST_RESPONSE,
} from './constant';

import {
  USER_SIGN_UP_RESPONSE,
  RESET_USER_SIGN_UP_RESPONSE,
  USER_SIGN_IN_RESPONSE,
} from './actionTypes';

const initialState = [];

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

const initialUserState = {
  successResponse: null,
  errorResponse: null,
};

export const user = (state = initialUserState, action) => {
  console.log('User Action received:', action);

  switch (action.type) {
    case USER_SIGN_UP_RESPONSE:
      if (action.successResponse) {
        return {
          ...state,
          successResponse: action.successResponse,
          errorResponse: null,
        };
      } else {
        return {
          ...state,
          errorResponse: action.errorResponse,
          successResponse: null,
        };
      }

    case USER_SIGN_IN_RESPONSE:
      if (action.successResponse) {
        return {
          ...state,
          successResponse: action.successResponse,
          errorResponse: null,
        };
      } else {
        return {
          ...state,
          errorResponse: action.errorResponse,
          successResponse: null,
        };
      }

    case RESET_USER_SIGN_UP_RESPONSE:
      return {
        ...state,
        successResponse: null,
        errorResponse: null,
      };

    default:
      return state;
  }
};
