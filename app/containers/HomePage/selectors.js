/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectRandomUsers = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('randomUsers').toJS()
);

export {
  selectHome,
  selectRandomUsers,
};
