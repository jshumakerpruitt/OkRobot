/*
 *
 * ChatBox
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectChatBox from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class ChatBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.chatBox}>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectChatBox();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
