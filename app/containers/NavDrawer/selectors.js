import { createSelector } from 'reselect';

/**
 * Direct selector to the navDrawer state domain
 */
const selectNavDrawerDomain = () => state => state.get('navDrawer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavDrawer
 */

const selectNavDrawer = () => createSelector(
  selectNavDrawerDomain(),
  (substate) => substate.toJS()
);

export default selectNavDrawer;
export {
  selectNavDrawerDomain,
};
