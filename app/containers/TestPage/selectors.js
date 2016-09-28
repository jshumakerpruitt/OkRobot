import { createSelector } from 'reselect';

/**
 * Direct selector to the testPage state domain
 */
const selectTestPageDomain = () => state => state.get('testPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestPage
 */

const selectTestPage = () => createSelector(
  selectTestPageDomain(),
  (substate) => substate.toJS()
);

const selectMessages = () => createSelector(
  selectTestPageDomain(),
  (substate) => substate.get('messages').toJS()
);

const selectIds = () => createSelector(
  selectTestPageDomain(),
  (substate) => substate.get('ids').toJS()
);

export default selectTestPage;
export {
  selectTestPageDomain,
  selectMessages,
  selectIds,
};
