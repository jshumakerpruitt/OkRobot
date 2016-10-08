/*
 *
 * VerifyPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import selectVerifyPage from './selectors';
import * as actions from './actions';
import messages from './messages';
import styles from './styles.css';

export class VerifyPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const token = this.props.location.query.token;
    if (token) {
      this.props.submitToken(token);
    }
  }

  render() {
    return (
      <div className={styles.verifyPage}>
        <Helmet
          title="VerifyPage"
          meta={[
            { name: 'description', content: 'Description of VerifyPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

VerifyPage.propTypes = {
  location: React.PropTypes.object,
  submitToken: React.PropTypes.func.isRequired,
};

const mapStateToProps = selectVerifyPage();

export default connect(mapStateToProps, actions)(VerifyPage);
