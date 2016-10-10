/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
// TODO: redirect to signup when user clicks on user

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import UserFilter from 'components/UserFilter';
import ProfileGrid from 'components/ProfileGrid';
import Login from 'containers/Login';

import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as loginSelectors from 'containers/Login/selectors';
import {
  selectUsers,
  selectHome,
} from './selectors';

import { selectToken } from 'containers/App/selectors';

import styles from './styles.css';

export class HomePage extends React.Component {
  componentDidMount() {
    if (!this.isLoggedIn()) {
      this.props.fetchRandomUsers();
    } else if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  isLoggedIn() {
    const token = this.props.token || '';
    return token.length > 0;
  }

  render() {
    return (
      <article className={styles.homePage}>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A Social App for Robots' },
          ]}
        />
        <div>
          <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
              <div className={styles.logo}>
                <div className={styles.logoInner}>
                  <h1>OkRobot</h1>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.homePageInner}>
            <Paper
              className={styles.paper}
              zDepth={1}
            >
              <div className={styles.form}>
                {this.isLoggedIn() ? <UserFilter fetchUsers={this.props.fetchUsers} /> : <Login />}
              </div>
            </Paper>
            {this.isLoggedIn() ?
            '' :
              <Paper
                style={{ marginBottom: '5px' }}
                className={styles.paper}
                zDepth={1}
              >
                <div className={styles.text}>
                  <h1>The Best Place to Meet Robots</h1>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut libero viverra, tempor libero eu, suscipit elit. Proin at suscipit mauris, in porta nibh. Nullam fringilla consectetur elit, ut tincidunt ligula vestibulum in. Nulla lorem purus, congue ut luctus id, congue vitae ante. Suspendisse ac sapien est.
                  </p>
                  <div className={styles.buttonWrapper}>
                    <Link to="/signup">
                      <RaisedButton
                        className={styles.button}
                        label="Join Now"
                        primary
                      />
                    </Link>
                  </div>
                </div>
              </Paper>
            }
            <ProfileGrid
              users={this.props.users}
              submitLike={this.props.submitLike}
              isLoggedIn={this.isLoggedIn()}
            />
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  fetchUsers: React.PropTypes.func,
  fetchRandomUsers: React.PropTypes.func,
  users: React.PropTypes.array,
  token: React.PropTypes.string,
  auth: React.PropTypes.object,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  submitLike: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  auth: loginSelectors.selectAuth(selectHome),
  email: loginSelectors.selectEmail(selectHome),
  password: loginSelectors.selectPassword(selectHome),
  token: selectToken(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, actions)(HomePage);
