import {combineReducers} from 'redux';
import {reducer, user} from './reducer';

export default combineReducers({
  reducer: reducer,
  user: user, // Combine user reducer here
});
