/*
 *
 * UserProfile
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUserProfile from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class UserProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.userProfile}>
      <Helmet
        title="UserProfile"
        meta={[
          { name: 'description', content: 'Description of UserProfile' },
        ]}
      />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectUserProfile();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
