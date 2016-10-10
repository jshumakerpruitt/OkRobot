/*
 *
 * UserProfile reducer
 *
 */

import { combineReducers } from 'redux-immutable';
// import { fromJS } from 'immutable';
import {
  RECEIVE_CURRENT_USER_PROFILE,
} from './constants';

const currentUserProfile = (
  state = {},
  action
) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILE:
      return action.currentUserProfile;
    default:
      return state;
  }
};

export default combineReducers({
  currentUserProfile,
});
