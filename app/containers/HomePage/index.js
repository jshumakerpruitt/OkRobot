/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ProfileGrid from 'components/ProfileGrid';

import Login from 'containers/Login';

import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as loginSelectors from 'containers/Login/selectors';
import {
  selectRandomUsers,
  selectHome,
} from './selectors';

import styles from './styles.css';

export class HomePage extends React.Component {
  /**
   * Changes the route
   * @param  {string} route The route we want to go to
   */
  componentDidMount() {
    this.props.fetchRandomUsers();
  }

  openLogin = () => {
    this.openRoute('/login');
  }

  openRoute = (route) => {
    this.props.changeRoute(route);
  };

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
          <Paper
            className={styles.paper}
            zDepth={1}
            style={{ width: '100%' }}
          >
            <div className={styles.logo}>
              <h1>OK Robot</h1>
            </div>
          </Paper>

          <Paper
            className={styles.paper}
            zDepth={1}
            style={{ width: '100%' }}
          >
            <div className={styles.form}>
              <Login
                email={this.props.email}
                password={this.props.password}
                auth={this.props.auth}
              />
            </div>
          </Paper>
          <Paper
            className={styles.paper}
            zDepth={1}
          >
            <div className={styles.text}>
              <h1>The Best Place to Meet Robots</h1>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut libero viverra, tempor libero eu, suscipit elit. Proin at suscipit mauris, in porta nibh. Nullam fringilla consectetur elit, ut tincidunt ligula vestibulum in. Nulla lorem purus, congue ut luctus id, congue vitae ante. Suspendisse ac sapien est.
              </p>
              <div className={styles.buttonWrapper}>
                <RaisedButton
                  className={styles.button}
                  label="Join Now"
                  primary
                />
              </div>
            </div>
          </Paper>
          <ProfileGrid
            users={this.props.randomUsers}
            submitLike={this.openLogin}
          />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  fetchRandomUsers: React.PropTypes.func,
  randomUsers: React.PropTypes.array,
  auth: React.PropTypes.object,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  randomUsers: selectRandomUsers(),
  auth: loginSelectors.selectAuth(selectHome),
  email: loginSelectors.selectEmail(selectHome),
  password: loginSelectors.selectPassword(selectHome),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, actions)(HomePage);
