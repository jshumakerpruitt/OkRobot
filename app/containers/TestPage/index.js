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
} from './selectors';

export class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.testWrapper}>
        <div className={styles.testPage}>
          <ChatBox
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
};

const mapStateToProps = createStructuredSelector({
  messages: selectMessages(),
  ids: selectIds(),
});

export default connect(mapStateToProps, actions)(TestPage);
