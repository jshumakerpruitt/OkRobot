import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectRandomUsers,
} from '../selectors';

describe('selectHome', () => {
  const homeSelector = selectHome();
  it('should select the home state', () => {
    const homeState = fromJS({
      randomUser: [],
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(homeSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectRandomUsers', () => {
  const randomUsersSelector = selectRandomUsers();
  it('should select the randomUsers', () => {
    const randomUsers = [
      { id: 1, username: 'foo' },
      { id: 2, username: 'bar' },
    ];

    const mockedState = fromJS({
      home: {
        randomUsers,
      },
    });
    expect(randomUsersSelector(mockedState)).toEqual(randomUsers);
  });
});
