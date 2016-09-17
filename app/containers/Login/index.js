/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';

import {
  selectAuth,
  selectEmail,
  selectPassword,
} from './selectors';
import styles from './styles.css';

// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.login} style={{ border: '1px solid black' }}>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <div
          className={styles.form}
          style={{ border: '1px solid blue' }}
        >
          <TextField
            onChange={(event) => this.props.updateEmail(event.target.value)}
            value={this.props.email}
            style={{ width: '100%' }}
            floatingLabelText="Email"
          />
          <TextField
            onChange={(event) => this.props.updatePassword(event.target.value)}
            value={this.props.password}
            style={{ width: '100%' }}
            floatingLabelText="Password"
            type="password"
          />
          <RaisedButton
            onClick={() => { this.props.submitLogin(this.props.auth); }}
            className={styles.submitButton}
            label="Sign In"
            primary
          />
          <br />
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
