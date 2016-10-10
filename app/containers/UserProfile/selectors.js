import { createSelector } from 'reselect';

/**
 * Direct selector to the userProfile state domain
 */
const selectUserProfileDomain = () => state => state.get('userProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserProfile
 */

const selectUserProfile = () => createSelector(
  selectUserProfileDomain(),
  (substate) => substate.toJS()
);

const selectCurrentUserProfile = () => createSelector(
  selectUserProfileDomain(),
  (substate) => substate.get('currentUserProfile') // .toJS()
);


export default selectUserProfile;
export {
  selectUserProfileDomain,
  selectCurrentUserProfile,
};
