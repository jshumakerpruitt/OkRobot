import { BrowsePage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<BrowsePage />', () => {
  it('It should render a ProfileGrid', () => {
    const users = [{ id: 1, username: 'foo' }];
    const renderedComponent = shallow(
      <BrowsePage users={users} />
    );
    expect(renderedComponent.find('ProfileGrid').length).toEqual(1);
  });
});
