import expect from 'expect';
import {
  submitLogin,
  receiveError,
  receiveSuccess,
  updateEmail,
  updatePassword,
} from '../actions';
import {
  SUBMIT_LOGIN,
  RECEIVE_ERROR,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../constants';

import { RECEIVE_TOKEN } from '../../App/constants';

describe('Login actions', () => {
  describe('Submit Login Request', () => {
    it('has an auth field', () => {
      const formData = {
        email: 'foo@bar.com',
        password: '123',
      };
      const expectedAuth = { auth: formData };
      expect(submitLogin(formData).auth).toEqual(expectedAuth);
    });

    it('has a type of SUBMIT_LOGIN', () => {
      const type = SUBMIT_LOGIN;
      expect(submitLogin().type).toEqual(type);
    });
  });

  describe('receive login error', () => {
    it('has a type of RECEIVE_ERROR', () => {
      const type = RECEIVE_ERROR;
      expect(receiveError().type).toEqual(type);
    });
  });

  describe('receive login success', () => {
    it('has a type of RECEIVE_TOKEN', () => {
      const type = RECEIVE_TOKEN;
      expect(receiveSuccess().type).toEqual(type);
    });
  });

  describe('update email', () => {
    it('has a type of UPDATE_EMAIL', () => {
      const type = UPDATE_EMAIL;
      expect(updateEmail().type).toEqual(type);
    });
  });

  describe('update password', () => {
    it('has a type of UPDATE_PASSWORD', () => {
      const type = UPDATE_PASSWORD;
      expect(updatePassword().type).toEqual(type);
    });
  });
});
