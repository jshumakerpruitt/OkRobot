/*
 *
 * VerifyPage reducer
 *
 */

// import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  RECEIVE_VERIFY_ERROR,
} from './constants';

const error = (
  state = null,
  action
) => {
  switch (action.type) {
    case RECEIVE_VERIFY_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default combineReducers({
  error,
});
