import {ADD_TO_CART, REMOVE_FROM_CART, FETCH_USER_LIST} from './constant';
import {USER_SIGN_UP} from './actionTypes';

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const fetchUserList = () => ({type: FETCH_USER_LIST});

export const userSignUp = requestBody => ({
  type: USER_SIGN_UP,
  payload: requestBody,
});

export const resetUserSignUpResponse = () => ({
  type: RESET_USER_SIGN_UP_RESPONSE,
});
