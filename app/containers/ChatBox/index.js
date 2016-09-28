/*
 *
 * ChatBox
 *
 */

 /* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import ActionCable from 'actioncable';
import * as actions from './actions';

export class ChatBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.submitMsg = this.submitMsg.bind(this);
  }

  componentDidMount() {
    this.cable = ActionCable.createConsumer('ws://localhost:4000/cable');
    this.subscription = this.cable.subscriptions.create(
      'ChatroomsChannel', {
        received: (data) => {
          this.props.receiveMessage(data.message);
        },
      }
    );
  }

  componentDidUpdate() {
    this._hidden.focus();
    this._input.focus();
  }

  componentWillUnmount() {
    this.cable.subscriptions.remove(this.subscription);
  }

  submitMsg(e) {
    if (e.keyCode === 13) {
      this.subscription.send({
        chatroom_id: 1,
        body: this._input.value,
      });
      this._input.value = '';
    }
  }

  render() {
    return (
      <div className={styles.chatBox}>
        <div className={styles.messageWrapper}>
          <div className={styles.messages}>
                {this.props.ids.map(
                  (id, i) =>
                    <div
                      key={i}
                      className={`${styles.message} ${i % 2 === 0 ? styles.myMessage : styles.theirMessage}`}
                    >
                      { this.props.messages[id].body}
                    </div>
                )}
            <div className={styles.hiddenWrapper}>
              <input
                ref={(c) => { this._hidden = c; }}
                className={styles.hidden}
              >
              </input>
            </div>
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
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, actions)(ChatBox);