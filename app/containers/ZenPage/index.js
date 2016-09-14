/*
 *
 * ZenPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { selectKoan } from './selectors';
import styles from './styles.css';
import { fetchKoan } from './actions';

export class ZenPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.zenPage}>
        <Helmet
          title="ZenPage"
          meta={[
            { name: 'description', content: 'Description of ZenPage' },
          ]}
        />
        Koan: {this.props.koan}
        <button onClick={() => this.props.dispatch(fetchKoan())}>click me</button>
      </div>
    );
  }
}

ZenPage.propTypes = {
  koan: React.PropTypes.string,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  koan: selectKoan(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ZenPage);
