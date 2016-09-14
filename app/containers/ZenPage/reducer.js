/*
 *
 * ZenPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
    FETCH_KOAN,
    REQUEST_KOAN,
    RECEIVE_KOAN,
} from './constants';

const initialState = fromJS({ koan: 'Not Zen is Zen' });

function zenPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_KOAN:
      return state;
    case REQUEST_KOAN:
      return state;
    case RECEIVE_KOAN:
      return state.set('koan', action.koan);
    default:
      return state;
  }
}

export default zenPageReducer;
