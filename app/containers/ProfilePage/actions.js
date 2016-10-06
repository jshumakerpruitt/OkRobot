/*
 *
 * ProfilePage actions
 *
 */


import {
  REQUEST_USER,
  RECEIVE_USER_ERROR,
  FETCH_USER,
} from './constants';
import {
  RECEIVE_USER,
  } from 'containers/BrowsePage/constants';

import * as browsePageActions from 'containers/BrowsePage/actions';
export const submitLike = browsePageActions.submitLike;
export const receiveLike = browsePageActions.receiveLike;

export function requestUser(id) {
  return {
    type: REQUEST_USER,
    id,
  };
}

export function fetchUser(id) {
  return {
    type: FETCH_USER,
    id,
  };
}
export function receiveUser(data) {
  return {
    type: RECEIVE_USER,
    user: data.user,
  };
}

export function receiveUserError(id) {
  return {
    type: RECEIVE_USER_ERROR,
    id,
  };
}

