/*
 *
 * SignupPage
 *
 */

import React from 'react';
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { selectSignupSuccess } from './selectors';
import styles from './styles.css';
import * as actions from './actions';
import SignupForm from 'components/SignupForm';
import Paper from 'material-ui/Paper';

class SignupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.signupPage}>
        <Helmet
          title="SignupPage"
          meta={[
            { name: 'description', content: 'Description of SignupPage' },
          ]}
        />
        <Paper
          className={styles.paper}
          zDepth={1}
          style={{ width: '100%' }}
        >
            {this.props.signupSuccess ?
              <div className={styles.message}>
               {`Success! Confirmation email sent to ${this.props.signupSuccess}`}
              </div> :
              <div className={styles.form}>
                <SignupForm
                  submitForm={this.props.submitForm}
                />
              </div>}
        </Paper>
      </div>
    );
  }
}

SignupPage.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
  signupSuccess: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  signupSuccess: selectSignupSuccess(),
});

// Decorate the form component
export default reduxForm({ form: 'signup' })(
  connect(mapStateToProps, actions)(SignupPage)
);
