import { createSelector } from 'reselect';

/**
 * Direct selector to the fooPage state domain
 */
const selectFooPageDomain = () => state => state.get('fooPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FooPage
 */

const selectFooPage = () => createSelector(
  selectFooPageDomain(),
  (substate) => substate.toJS()
);

const selectAuth = () => createSelector(
  selectFooPageDomain(),
  (substate) => substate.get('auth').toJS()
);

const selectError = () => createSelector(
  selectFooPageDomain(),
  (substate) => substate.get('error').toJS()
);

const selectIsSubmitting = () => createSelector(
  selectFooPageDomain(),
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

export default selectFooPage;
export {
  selectFooPageDomain,
  selectIsSubmitting,
  selectError,
  selectAuth,
  selectEmail,
  selectPassword,
};
