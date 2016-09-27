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

export {
  selectLogin,
  selectHome,
  selectHomeDomain,
  selectRandomUsers,
};
