/**
 *
 * SignupForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';

import styles from 'components/LoginBox/styles.css';
import ownStyles from './styles.css';

import TextField from 'material-ui/TextField';
const textField = (hintText, type = 'text') => (field) => (
  <TextField
    type={type}
    name={field.input.name}
    value={field.input.value}
    onChange={(event) => field.input.onChange(event.target.value)}
    hintText={hintText}
    floatingLabelText={hintText}
    style={{ width: '100%' }}
  />
  );

const emailField = textField('email');
const usernameField = textField('username');
const passwordField = textField('password', 'password');
const ageField = textField('age');
const genderField = textField('gender');

const SignupForm = ({
  handleSubmit,
  submitForm,
}) =>
  <div className={styles.loginBox}>
    <form
      className={ownStyles.form}
      onSubmit={handleSubmit(data => { submitForm(data.toJS()); })}
    >
      <div className={styles.loginColumn}>
        <div className={styles.loginRow}>
          <Field
            name="email"
            type="text"
            component={emailField}
          />
        </div>
        <div className={styles.loginRow}>
          <Field
            name="username"
            type="text"
            component={usernameField}
          />
        </div>
        <div className={styles.loginRow}>
          <Field
            name="password"
            type="password"
            component={passwordField}
          />
        </div>
        <div className={styles.loginRow}>
          <Field
            name="gender"
            type="text"
            component={genderField}
          />
        </div>
        <div className={styles.loginRow}>
          <Field
            name="age"
            type="text"
            component={ageField}
          />
        </div>
        <RaisedButton
          type="submit"
          className={styles.button}
          primary
          label="Sign Up"
          style={{ width: '100%' }}
        />
      </div>
    </form>
  </div>;

SignupForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitForm: React.PropTypes.func,
};

// Decorate the form component
export default reduxForm({
  form: 'signup', // a unique name for this form
})(SignupForm);
