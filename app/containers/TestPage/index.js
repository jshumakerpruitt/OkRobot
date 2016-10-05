/*
 *
 * TestPage
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

export class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.partnerId = this.props.params.id;
  }

  componentDidMount() {
    this.props.setChatroom(this.partnerId);
  }

  render() {
    return (
      <div className={styles.testWrapper}>
        <div className={styles.testPage}>
          <ChatBox
            chatroomId={this.props.chatroomId}
            token={this.props.token}
            partnerId={this.partnerId}
            messages={this.props.messages}
            ids={this.props.ids}
          />
        </div>
      </div>
    );
  }
}

TestPage.propTypes = {
  ids: React.PropTypes.array,
  messages: React.PropTypes.object,
  token: React.PropTypes.string,
  params: React.PropTypes.object,
  setChatroom: React.PropTypes.func.isRequired,
  chatroomId: React.PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  messages: selectMessages(),
  ids: selectIds(),
  token: selectToken(),
  chatroomId: selectChatroomId(),
});

export default connect(mapStateToProps, actions)(TestPage);
