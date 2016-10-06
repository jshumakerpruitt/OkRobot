/*
 *
 * ChatBox
 *
 */

 /* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCable,
  selectChatroomId,
  selectSubscription,
} from 'containers/TestPage/selectors';
import {
  selectCurrentUser,
} from 'containers/App/selectors';
import styles from './styles.css';
import * as actions from './actions';

export class ChatBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.submitMsg = this.submitMsg.bind(this);
  }

  componentWillMount() {
    this.props.setChatroom(this.props.partnerId);
    this.props.requestCable(this.props.token);
    this.subscribe();
  }

  componentWillUpdate() {
    this.subscribe();
  }

  componentDidUpdate() {
    const messageBox = this._messages;
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe() {
    if (!this.subscription &&
        this.props.chatroomId &&
        this.props.cable) {
      this.subscription = this.props.cable.subscriptions.create(
        'ChatroomsChannel', {
          received: (data) => {
            this.props.receiveMessage(data.message);
          },
        }
      );
    }
  }

  unsubscribe() {
    this.props.cable.subscriptions.remove(this.subscription);
  }

  submitMsg(e) {
    if (e.keyCode === 13) {
      this.subscription.send({
        chatroom_id: this.props.chatroomId,
        body: this._input.value,
      });
      this._input.value = '';
    }
  }

  render() {
    const { messages, currentUser } = this.props;

    return (
      <div className={styles.chatBox}>
        <div
          ref={(c) => { this._messages = c; }}
          className={styles.messageWrapper}
        >
          <div
            className={styles.messages}
          >
            {this.props.ids.map(
               (id, i) => {
                 const css = messages[id].userId === currentUser ?
                             styles.myMessage : styles.theirMessage;
                 return (
                   <div
                     key={i}
                     className={`${styles.message} ${css}`}
                   >
                    { this.props.messages[id].body}
                   </div>
                 );
               }
             )}
          </div>
        </div>
        <div className={styles.input}>
          <input
            ref={(thisComponent) => { this._input = thisComponent; }}
            onKeyUp={this.submitMsg}
          >
          </input>
        </div>
      </div>
    );
  }
}

ChatBox.propTypes = {
  messages: React.PropTypes.object,
  ids: React.PropTypes.array,
  receiveMessage: React.PropTypes.func.isRequired,
  setChatroom: React.PropTypes.func.isRequired,
  requestCable: React.PropTypes.func.isRequired,
  token: React.PropTypes.string.isRequired,
  original: React.PropTypes.number,
  chatroomId: React.PropTypes.number,
  partnerId: React.PropTypes.number,
  currentUser: React.PropTypes.number,
  cable: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  chatroomId: selectChatroomId(),
  cable: selectCable(),
  subscription: selectSubscription(),
  currentUser: selectCurrentUser(),
});

export default connect(mapStateToProps, actions)(ChatBox);
