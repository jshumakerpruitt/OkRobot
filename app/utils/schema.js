import { Schema, arrayOf } from 'normalizr';

export const user = new Schema('users');
/* eslint-disable new-cap */
export const arrayOfUsers = new arrayOf(user);
