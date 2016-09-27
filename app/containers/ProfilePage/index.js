/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectProfilePage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.profilePage}>
        <Helmet
          title="ProfilePage"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectProfilePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
