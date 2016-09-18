/*
 *
 * BrowsePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import ProfileGrid from '../../components/ProfileGrid';
import * as actions from './actions';
import { selectUsers } from './selectors';
import { selectToken } from '../App/selectors';
import styles from './styles.css';

export class BrowsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchUsers(this.props.token);
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
  token: React.PropTypes.string,
  fetchUsers: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  token: selectToken(),
});

export default connect(mapStateToProps, actions)(BrowsePage);
