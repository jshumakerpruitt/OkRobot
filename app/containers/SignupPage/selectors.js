import { createSelector } from 'reselect';

/**
 * Direct selector to the signupPage state domain
 */
const selectSignupPageDomain = () => state => state.get('signupPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupPage
 */

const selectSignupPage = () => createSelector(
  selectSignupPageDomain(),
  (substate) => substate.toJS()
);

const selectSignupSuccess = () => createSelector(
  selectSignupPageDomain(),
  (substate) => substate.get('signupSuccess')

);

export default selectSignupPage;
export {
  selectSignupPageDomain,
  selectSignupSuccess,
};
