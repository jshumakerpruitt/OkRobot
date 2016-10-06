import { createSelector } from 'reselect';

/**
 * Direct selector to the chatPage state domain
 */
const selectChatPageDomain = () => state => state.get('chatPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChatPage
 */
// TODO: move almost all of this to ChatBox
const selectChatPage = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.toJS()
);

const selectMessages = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.get('messages').toJS()
);

const selectIds = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.get('ids').toJS()
);

const selectChatroomId = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.get('chatroomId')
);

const selectCable = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.get('cable')
);

const selectSubscription = () => createSelector(
  selectChatPageDomain(),
  (substate) => substate.get('subscription')
);

export default selectChatPage;
export {
  selectSubscription,
  selectChatPageDomain,
  selectMessages,
  selectIds,
  selectChatroomId,
  selectCable,
};
