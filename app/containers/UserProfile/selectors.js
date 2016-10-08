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

export default selectUserProfile;
export {
  selectUserProfileDomain,
};
