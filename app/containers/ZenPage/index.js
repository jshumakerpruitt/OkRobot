/*
 *
 * ZenPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import selectZenPage, {selectKoan} from './selectors';
import messages from './messages';
import styles from './styles.css';
import { fetchKoan } from './actions';
import {
    FETCH_KOAN
} from './constants';

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
      <button onClick={() => this.props.dispatch({type: FETCH_KOAN})}>click me</button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    koan: selectKoan(),
})

function mapDispatchToProps(dispatch) {
   return {
       dispatch,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZenPage);
