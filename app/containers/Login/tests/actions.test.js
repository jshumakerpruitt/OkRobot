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
  RECEIVE_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../constants';


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
    it('has a type of RECEIVE_SUCCESS', () => {
      const type = RECEIVE_SUCCESS;
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
