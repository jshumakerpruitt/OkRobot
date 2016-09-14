/*
 *
 * BrowsePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { GridTile } from 'material-ui/GridList';
import selectBrowsePage from './selectors';
import styles from './styles.css';

export class BrowsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.browsePage}>
        <Helmet
          title="BrowsePage"
          meta={[
            { name: 'description', content: 'Description of BrowsePage' },
          ]}
        />
        <GridTile />
      </div>
    );
  }
}

const mapStateToProps = selectBrowsePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
