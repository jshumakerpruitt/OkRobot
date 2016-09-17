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
  selectRedirectPath,
} from './selectors';
import * as actions from './actions';
import { PUBLIC_ROUTES } from './constants';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './styles.css';

//    <AppBar title={}
export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const path = this.props.location.pathname;
    const token = this.props.token;

    if (token.length === 0 && !this.isPublic(path)) {
      this.props.goToNow('/login');
      this.props.setRedirect(path);
    }
  }

  componentWillReceiveProps() {
    if (this.props.token.length > 0 && this.props.redirectPath.length > 0) {
      this.props.goToNow(this.props.redirectPath);
      this.props.setRedirect('');
    }
  }

  isPublic(path) {
    return PUBLIC_ROUTES.find((p) => p === path);
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - HelloRobot"
          defaultTitle="HelloRobot - Social App for Robots"
          meta={[
            { name: 'description', content: 'Social App for Robots' },
          ]}
        />
        <Header />
        <div className={styles.wrapper}>
          {React.Children.toArray(this.props.children)}
        </div>
        <Footer />
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
  redirectPath: React.PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  redirectPath: selectRedirectPath(),
});

export default connect(mapStateToProps, actions)(App);
