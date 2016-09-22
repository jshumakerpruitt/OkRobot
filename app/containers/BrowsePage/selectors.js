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

const selectUsers = () => createSelector(
  selectBrowsePageDomain(),
  (substate) => {
    const users = substate.get('users');
    return substate
      .get('ids')
      .map(id => users.get(String(id)))
      .toJS();
  },
);


export default selectBrowsePage;
export {
  selectBrowsePageDomain,
  selectUsers,
};
