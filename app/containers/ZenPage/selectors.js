import { createSelector } from 'reselect';

/**
 * Direct selector to the zenPage state domain
 */
const selectZenPageDomain = () => state => state.get('zenPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ZenPage
 */

const selectZenPage = () => createSelector(
  selectZenPageDomain(),
  (substate) => substate.toJS()
);

const selectKoan = () => createSelector(
  selectZenPageDomain(),
  (substate) => substate.get('koan')
);


export default selectZenPage;
export {
  selectZenPageDomain,
  selectKoan
};
