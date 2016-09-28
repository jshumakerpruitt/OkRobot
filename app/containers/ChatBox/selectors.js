import { createSelector } from 'reselect';

/**
 * Direct selector to the chatBox state domain
 */
const selectChatBoxDomain = () => state => state.get('chatBox');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChatBox
 */

const selectChatBox = (domainSelector) => createSelector(
  domainSelector(),
  (substate) => substate.get('chatBox')
);

export default selectChatBox;
export {
  selectChatBoxDomain,
};
