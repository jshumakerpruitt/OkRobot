/*
 *
 * ChatPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import ChatBox from 'containers/ChatBox';
import * as actions from './actions';

import {
  selectMessages,
  selectIds,
  selectChatroomId,
} from './selectors';

import { selectToken } from 'containers/App/selectors';

export class ChatPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.chatWrapper}>
        <div className={styles.chatPage}>
          <ChatBox
            token={this.props.token}
            partnerId={Number(this.props.params.id)}
            messages={this.props.messages}
            ids={this.props.ids}
          />
        </div>
      </div>
    );
  }
}

ChatPage.propTypes = {
  ids: React.PropTypes.array,
  messages: React.PropTypes.object,
  token: React.PropTypes.string,
  params: React.PropTypes.object,
  chatroomId: React.PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  messages: selectMessages(),
  ids: selectIds(),
  token: selectToken(),
  chatroomId: selectChatroomId(),
});

export default connect(mapStateToProps, actions)(ChatPage);
