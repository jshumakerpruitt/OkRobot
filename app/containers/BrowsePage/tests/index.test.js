import { BrowsePage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { GridTile } from 'material-ui/GridList' // eslint-disable-line

describe('<BrowsePage />', () => {
  it('It should render a ProfileGrid', () => {
    const profiles = [{ id: 1, username: 'fakeuser' }];
    const renderedComponent = shallow(
      <BrowsePage
        profiles={profiles}
      />
    );

    expect(renderedComponent.contains(<GridTile />)).toEqual(true);
  });
});
