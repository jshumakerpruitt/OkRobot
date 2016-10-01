/*
 *
 * Login
 *
 */

import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import * as actions from './actions';

import styles from './styles.css';
import { emailField, passwordField } from 'components/TextField';

import RaisedButton from 'material-ui/RaisedButton';

const Login = ({
  handleSubmit,
  submitLogin,
}) =>
  <div className={styles.loginBox}>
    <form
      className={styles.form}
      onSubmit={handleSubmit(data => { submitLogin(data.toJS()); })}
    >
      <div className={styles.loginColumn}>
        <div className={styles.loginRow}>
          <Field
            type="email"
            name="email"
            component={emailField}
          />
        </div>
        <div className={styles.loginRow}>
          <Field
            type="password"
            name="password"
            component={passwordField}
          />
        </div>
        <div className={styles.loginRow}>
          <RaisedButton
            type="submit"
            className={styles.button}
            primary
            label="log in"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </form>
    <div className={styles.loginRow}>
      <Link to="/resetpassword">
        <div className={styles.link}>
          Forgot Password
        </div>
      </Link>
      <Link to="/signup">
        <div className={styles.link}>
          Create Account
        </div>
      </Link>
    </div>
  </div>;

Login.propTypes = {
  submitLogin: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default reduxForm({ form: 'login' })(
  connect(mapStateToProps, actions)(Login)
);
