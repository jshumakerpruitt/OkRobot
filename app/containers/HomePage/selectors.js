/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectRandomUsers = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('randomUsers').toJS()
);

const selectHomeDomain = () => createSelector(
  selectHome(),
  (homeState) => homeState.toJS()
);

const selectLogin = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('login').toJS()
);

const selectUsers = () => createSelector(
  selectHome(),
  (substate) => {
    const users = substate.get('users');
    return substate
      .get('ids')
      .map(id => users.get(String(id)))
      .toJS();
  },
);

export {
  selectLogin,
  selectHome,
  selectHomeDomain,
  selectRandomUsers,
  selectUsers,
};
