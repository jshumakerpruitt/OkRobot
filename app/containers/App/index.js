/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './styles.css';

//    <AppBar title={}
function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        titleTemplate="%s - HelloRobot"
        defaultTitle="HelloRobot - Social App for Robots"
        meta={[
          { name: 'description', content: 'Social App for Robots' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
