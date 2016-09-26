/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectToken = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('token')
);

const selectIsNavOpen = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isNavOpen')
);

const selectAuth = () => createSelector(
  selectGlobal(),
  (substate) => substate.get('auth').toJS()
);

const selectError = () => createSelector(
  selectGlobal(),
  (substate) => substate.get('error').toJS()
);

const selectIsSubmitting = () => createSelector(
  selectGlobal(),
  (substate) => substate.get('isSubmitting').toJS()
);

const selectRedirectPath = () => createSelector(
  selectGlobal(),
  (substate) => substate.get('redirectPath')
);

const selectEmail = () => createSelector(
  selectAuth(),
  (substate) => substate.email
);

const selectPassword = () => createSelector(
  selectAuth(),
  (substate) => substate.password
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectToken,
  selectGlobal,
  selectLocationState,
  selectIsNavOpen,
  selectIsSubmitting,
  selectError,
  selectAuth,
  selectEmail,
  selectPassword,
  selectRedirectPath,
};
