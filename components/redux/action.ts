import {ADD_TO_CART, REMOVE_FROM_CART, FETCH_USER_LIST} from './constant';

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const fetchUserList = () => ({type: FETCH_USER_LIST});
