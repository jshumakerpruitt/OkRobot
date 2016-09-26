/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';

import {
  selectAuth,
  selectEmail,
  selectPassword,
} from 'containers/App/selectors';

import styles from './styles.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.loginBox}>
        <div className={styles.loginColumn}>
          <div className={styles.loginRow}>
            <TextField
              value={this.props.email}
              onChange={(event) => this.props.updateEmail(event.target.value)}
              hintText="email"
              floatingLabelText="email"
              style={{ width: '100%' }}
            >
            </TextField>
          </div>
          <div className={styles.loginRow}>
            <TextField
              value={this.props.password}
              onChange={(event) => this.props.updatePassword(event.target.value)}
              type="password"
              hintText="password"
              floatingLabelText="password"
              style={{ width: '100%' }}
            >
            </TextField>
          </div>
          <div className={styles.loginRow}>
            <RaisedButton
              onClick={() => { this.props.submitLogin(this.props.auth); }}
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
}

Login.propTypes = {
  auth: React.PropTypes.object.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  updateEmail: React.PropTypes.func.isRequired,
  updatePassword: React.PropTypes.func.isRequired,
  submitLogin: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuth(),
  email: selectEmail(),
  password: selectPassword(),
});

export default connect(mapStateToProps, actions)(Login);
