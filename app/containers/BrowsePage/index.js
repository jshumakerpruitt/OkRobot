/*
 *
 * BrowsePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { fetchUsers } from './actions';

import { selectUsers } from './selectors';
import styles from './styles.css';

export class BrowsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    return (
      <div className={styles.browsePage}>
        <Helmet
          title="BrowsePage"
          meta={[
            { name: 'description', content: 'Description of BrowsePage' },
          ]}
        />
        users: {this.props.users.map(user => user.username)}
      </div>
    );
  }
}


BrowsePage.propTypes = {
  users: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
