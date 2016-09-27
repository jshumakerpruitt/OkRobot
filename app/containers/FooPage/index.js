/*
 *
 * FooPage
 *
 */

import React from 'react';
import styles from './styles.css';
import Login from 'containers/Login';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAuth, selectEmail, selectPassword } from './selectors';

export class FooPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fooPage}>
        <Login
          email={this.props.email}
          password={this.props.password}
          auth={this.props.auth}
        />
      </div>
    );
  }
}

FooPage.propTypes = {
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  auth: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  password: selectPassword(),
  auth: selectAuth(),
});

export default connect(mapStateToProps, {})(FooPage);
