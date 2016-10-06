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

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/sanitize.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import NavDrawer from 'components/NavDrawer';

import styles from './styles.css';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const token = this.props.token || '';
    const links = [
      { to: '/', text: 'Home' },
      { to: '/browse', text: 'Browse' },
      { to: '/test', text: 'Chat' },
      { to: '/signup', text: 'Sign Up' },
      { to: '/profile', text: 'Profile' },
    ];
    return (
      <div className={styles.dataRoot}>
        <Helmet
          titleTemplate="%s - OK robot"
          defaultTitle="OK Robot - Social App for Robots"
          meta={[
            { name: 'description', content: 'Social App for Robots' },
          ]}
        />
        <div className={styles.header} >
          <Header
            title="OK Robot"
            onOpenClick={this.props.openNav}
            isLoggedIn={token.length > 0}
          />
        </div>
        <div className={styles.stretchX}>
          <div className={styles.wrapper}>
            {React.Children.toArray(this.props.children)}
          </div>
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
