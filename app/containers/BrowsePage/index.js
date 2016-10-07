/*
 *
 * BrowsePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Paper from 'material-ui/Paper';
import ProfileGrid from 'components/ProfileGrid';
import UserFilter from 'components/UserFilter';
import * as actions from './actions';
import { selectUsers } from './selectors';
import styles from './styles.css';

export class BrowsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
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
        <div className={styles.formWrapper}>
          <Paper
            className={styles.paper}
            zDepth={1}
            style={{ maxWidth: '100%' }}
          >
            <div className={styles.form}>
              <UserFilter />
            </div>
          </Paper>
        </div>
        <ProfileGrid
          users={this.props.users}
          submitLike={this.props.submitLike}
        />
      </div>
    );
  }
}


BrowsePage.propTypes = {
  users: React.PropTypes.array,
  fetchUsers: React.PropTypes.func.isRequired,
  submitLike: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
});

export default connect(mapStateToProps, actions)(BrowsePage);
