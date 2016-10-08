import { createSelector } from 'reselect';

/**
 * Direct selector to the verifyPage state domain
 */
const selectVerifyPageDomain = () => state => state.get('verifyPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VerifyPage
 */

const selectVerifyPage = () => createSelector(
  selectVerifyPageDomain(),
  (substate) => substate.toJS()
);

export default selectVerifyPage;
export {
  selectVerifyPageDomain,
};
