/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { selectToken } from './selectors';

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
      this.props.dispatch(push('/login'));
    }
  }

  isPublic(path) {
    return ['/', '/login'].find((p) => p === path);
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
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
