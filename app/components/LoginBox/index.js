/**
 *
 * LoginBox
 *
 */

import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import styles from './styles.css';

function LoginBox() {
  return (
    <div className={styles.loginBox}>
      <div className={styles.loginColumn}>
        <div className={styles.loginRow}>
          <TextField
            hintText="email"
            floatingLabelText="email"
            style={{ width: '100%' }}
          >
          </TextField>
        </div>
        <div className={styles.loginRow}>
          <TextField
            hintText="password"
            floatingLabelText="password"
            style={{ width: '100%' }}
          >
          </TextField>
        </div>

        <div className={styles.loginRow}>
          <RaisedButton
            className={styles.button}
            primary
            label="log in"
            style={{ width: '100%' }}
          />
        </div>
        <div className={styles.loginRow}>
          <a href="/resetpassword">
            <div className={styles.link}>
              Forgot Password
            </div>
          </a>
          <a href="/login">
            <div className={styles.link}>
              Create Account
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
