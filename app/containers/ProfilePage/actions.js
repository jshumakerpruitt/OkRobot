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
  } from 'containers/HomePage/constants';

import * as homePageActions from 'containers/HomePage/actions';
export const submitLike = homePageActions.submitLike;
export const receiveLike = homePageActions.receiveLike;

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

