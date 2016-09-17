import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const selectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

const selectAuth = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get('auth').toJS()
);

const selectError = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get('error').toJS()
);

const selectIsSubmitting = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get('isSubmitting').toJS()
);

const selectEmail = () => createSelector(
  selectAuth(),
  (substate) => substate.email
);

const selectPassword = () => createSelector(
  selectAuth(),
  (substate) => substate.password
);

export default selectLogin;
export {
  selectLoginDomain,
  selectIsSubmitting,
  selectError,
  selectAuth,
  selectLogin,
  selectEmail,
  selectPassword,
};
