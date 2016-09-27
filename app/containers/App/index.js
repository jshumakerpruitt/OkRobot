/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  selectToken,
  selectIsNavOpen,
} from './selectors';
import * as actions from './actions';
import { PUBLIC_ROUTES } from './constants';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/sanitize.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import NavDrawer from 'components/NavDrawer';

import styles from './styles.css';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const path = this.props.location.pathname;
    const token = this.props.token;

    if (token.length === 0 && !this.isPublic(path)) {
      this.props.goToNow('/foo');
      this.props.setRedirect(path);
    }
  }

  isPublic(path) {
    return PUBLIC_ROUTES.find((p) => p === path);
  }

  render() {
    const links = [
      { to: '/', text: 'Home' },
      { to: '/browse', text: 'Browse' },
      { to: '/profile', text: 'Profile' },
    ];
    return (
      <div className={styles.dataRoot}>
        <Helmet
          titleTemplate="%s - HelloRobot"
          defaultTitle="HelloRobot - Social App for Robots"
          meta={[
            { name: 'description', content: 'Social App for Robots' },
          ]}
        />
        <div className={styles.header} >
          <Header
            title="HelloRobot"
            onOpenClick={this.props.openNav}
            showOpen={this.props.token.length > 0}
            openHome={() => this.props.goToNow('/')}
          />
        </div>
        <div className={styles.wrapper}>
          {React.Children.toArray(this.props.children)}
          <NavDrawer
            isOpen={this.props.isNavOpen}
            currentPage={this.props.location.pathname}
            onCloseClick={this.props.closeNav}
            revokeToken={this.props.revokeToken}
            links={links}
          >
          </NavDrawer>
        </div>
        <div className={styles.footer} >
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object.isRequired,
  token: React.PropTypes.string.isRequired,
  goToNow: React.PropTypes.func.isRequired,
  setRedirect: React.PropTypes.func.isRequired,
  isNavOpen: React.PropTypes.bool.isRequired,
  openNav: React.PropTypes.func.isRequired,
  closeNav: React.PropTypes.func.isRequired,
  revokeToken: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  isNavOpen: selectIsNavOpen(),
});

export default connect(mapStateToProps, actions)(App);
