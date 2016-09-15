import ProfileGrid from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ProfileGrid />', () => {
  const users = [
      { id: 1, username: 'foo' },
      { id: 2, username: 'bar' },
  ];
  const renderedComponent = shallow(
    <ProfileGrid users={users} />
  );
  it('it should render a GridTile for each user', () => {
    expect(renderedComponent.find('GridTile').length).toEqual(2);
  });

  it('should render usernames', () => {
    expect(renderedComponent.find('img').length).toEqual(2);
  });
});
