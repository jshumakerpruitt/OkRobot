import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const selectProfilePageDomain = () => state => state.get('profilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfilePage
 */

export const selectProfilePage = () => createSelector(
  selectProfilePageDomain(),
  (substate) => substate.toJS()
);

const selectUser = () => createSelector(
  selectProfilePageDomain(),
  (substate) => substate.getIn(['user', 'user'])
);

const selectUsers = () => createSelector(
  selectProfilePageDomain(),
  (substate) => substate.get('users').toJS()
);

export default selectProfilePage;
export {
  selectProfilePageDomain,
  selectUser,
  selectUsers,
};
