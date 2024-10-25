import {takeEvery, put} from 'redux-saga/effects';
import {FETCH_USER_LIST, SAVE_USER_LIST_RESPONSE} from './constant';
import {USER_SIGN_UP, USER_SIGN_UP_RESPONSE} from './actionTypes';
import config from './../../config';

function* doFetchUserList() {
  try {
    const url = `${config.baseURL}/register`;
    const response = yield fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = yield response.json();
    console.log('SAGA FUNCTION CALLED', result);
    yield put({type: SAVE_USER_LIST_RESPONSE, result});
  } catch (err) {
    console.error(err.message); // Set error message in state
  }
}

function* userSignUp(params: type) {
  console.info('params: ', params);
  const url = `${config.baseURL}/users`;
  console.info('register url --> ', url);
  try {
    let response = yield fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params.payload),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    result = yield response.json();
    console.info('result', result);
    if (result) {
      const successResponse = {
        status: 200,
        message: 'User Registered Successfully!',
        data: result,
      };
      console.info('successResponse: ', successResponse);
      yield put({type: USER_SIGN_UP_RESPONSE, successResponse});
    } else {
      const errorResponse = {
        status: 400,
        message: result.message || 'User Registration Failed!',
        data: result,
      };
      yield put({type: USER_SIGN_UP_RESPONSE, errorResponse});
    }
  } catch (err) {
    console.error(err.message);
    const errorResponse = {
      status: 400,
      message: err.message || 'An error occurred during registration.',
      data: result,
    };
    yield put({type: USER_SIGN_UP_RESPONSE, errorResponse});
  }
}

function* SagaData() {
  yield takeEvery(FETCH_USER_LIST, doFetchUserList);
  yield takeEvery(USER_SIGN_UP, userSignUp);
}

export default SagaData;
