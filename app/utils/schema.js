/* eslint-disable new-cap */
import { Schema, arrayOf } from 'normalizr';

export const user = new Schema('users');
export const arrayOfUsers = new arrayOf(user);

export const message = new Schema('messages');
export const arrayOfMessages = new arrayOf(message);
