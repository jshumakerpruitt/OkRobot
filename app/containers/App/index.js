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

import Footer from 'components/Footer';

import styles from './styles.css';

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
      {React.Children.toArray(props.children)}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
