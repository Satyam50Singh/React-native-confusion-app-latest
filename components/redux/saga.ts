import {takeEvery, put} from 'redux-saga/effects';
import {FETCH_USER_LIST, SAVE_USER_LIST_RESPONSE} from './constant';

function* doFetchUserList() {
  try {
    const url = 'http://192.168.1.2:3000/register/';
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

function* SagaData() {
  yield takeEvery(FETCH_USER_LIST, doFetchUserList);
}

export default SagaData;
