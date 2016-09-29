/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  RECEIVE_RANDOM_USERS,
} from './constants';

import { fromJS } from 'immutable';

import loginReducer from 'containers/Login/reducer';
import { combineReducers } from 'redux-immutable';

const usersInitialState = fromJS([
]);

const randomUsers = (
  state = usersInitialState,
  action,
) => {
  switch (action.type) {
    case RECEIVE_RANDOM_USERS:
      return fromJS(action.randomUsers);
    default:
      return state;
  }
};

export default combineReducers({
  randomUsers,
  login: loginReducer,
});
