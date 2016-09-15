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
import ProfileGrid from '../../components/ProfileGrid';

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
        <ProfileGrid users={this.props.users} />
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
