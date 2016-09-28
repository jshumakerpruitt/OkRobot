import { createSelector } from 'reselect';

const selectLogin = (domainSelector) => createSelector(
  domainSelector(),
  (substate) => substate.get('login')
);

const selectAuth = (domainSelector) => createSelector(
  selectLogin(domainSelector),
  (substate) => substate.get('auth').toJS()
);

const selectError = (domainSelector) => createSelector(
  selectLogin(domainSelector),
  (substate) => substate.get('error').toJS()
);

const selectIsSubmitting = (domainSelector) => createSelector(
  selectLogin(domainSelector),
  (substate) => substate.get('isSubmitting').toJS()
);

const selectEmail = (domainSelector) => createSelector(
  selectLogin(domainSelector),
  (substate) => substate.get('auth').toJS().email
);

const selectPassword = (domainSelector) => createSelector(
  selectLogin(domainSelector),
  (substate) => substate.get('auth').toJS().password
);

export {
  selectIsSubmitting,
  selectError,
  selectAuth,
  selectEmail,
  selectPassword,
  selectLogin,
};
