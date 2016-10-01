/**
*
* TextField
*
*/

import React from 'react';
import { Field } from 'redux-form/immutable';

import TextField from 'material-ui/TextField';

export const textField = (hintText, inputType = 'text') => (field) => (
  <TextField
    type={inputType}
    name={field.input.name}
    value={field.input.value}
    onChange={(event) => field.input.onChange(event.target.value)}
    hintText={hintText}
    floatingLabelText={hintText}
    style={{ width: '100%' }}
  />
  );

export const genericField = textField('hint-text');
export const emailField = textField('email');
export const usernameField = textField('username');
export const passwordField = textField('password', 'password');
export const ageField = textField('age');
export const genderField = textField('gender');

export default () =>
  <Field
    name="text"
    type="text"
    component={genericField}
  />;
