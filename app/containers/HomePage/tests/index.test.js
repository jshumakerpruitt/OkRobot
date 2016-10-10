/**
 * Test the HomePage
 */

import { HomePage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePage />', () => {
  it('It should render a ProfileGrid', () => {
    const users = [{ id: 1, username: 'foo' }];
    const renderedComponent = shallow(
      <HomePage users={users} />
    );
    expect(renderedComponent.find('ProfileGrid').length).toEqual(1);
    // expect(renderedComponent.debug()).toEqual(1);
  });
});
