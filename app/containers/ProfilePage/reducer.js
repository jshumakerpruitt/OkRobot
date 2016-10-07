/*
 *
 * ProfilePage reducer
 *
 */

// import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { users, ids } from 'containers/BrowsePage/reducer';

const profilePageReducer = combineReducers({
  users,
  ids,
});
export default profilePageReducer;
