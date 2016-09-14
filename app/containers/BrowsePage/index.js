/*
 *
 * BrowsePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBrowsePage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class BrowsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.browsePage}>
      <Helmet
        title="BrowsePage"
        meta={[
          { name: 'description', content: 'Description of BrowsePage' },
        ]}
      />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectBrowsePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
