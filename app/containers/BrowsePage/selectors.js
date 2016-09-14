import { createSelector } from 'reselect';

/**
 * Direct selector to the browsePage state domain
 */
const selectBrowsePageDomain = () => state => state.get('browsePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BrowsePage
 */

const selectBrowsePage = () => createSelector(
  selectBrowsePageDomain(),
  (substate) => substate.toJS()
);

export default selectBrowsePage;
export {
  selectBrowsePageDomain,
};
